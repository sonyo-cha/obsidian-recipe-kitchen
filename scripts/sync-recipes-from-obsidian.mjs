import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const sourceDir = process.argv[2] || "C:/Users/piipuu/Documents/obsidian/おいしいレシピ";
const outputPath = process.argv[3] || path.join(repoRoot, "recipes-data.js");

const RECIPE_META = {
  "黒豆三温糖蒸しパン（卵1個使い切り版）": {
    id: "kuromame-mushipan",
    shortTitle: "黒豆三温糖蒸しパン",
    photo: "assets/kuromame-mushipan.png",
  },
  "レンジで簡単 なすの煮びたし": {
    id: "nasu-nibitashi",
    shortTitle: "なすの煮びたし",
    photo: "assets/nasu-nibitashi.png",
  },
  "薬膳風マーラータン（1人前・ダシダ入り）": {
    id: "yakuzen-malatang",
    shortTitle: "薬膳風マーラータン",
    photo: "assets/malatang.png",
  },
  "ヤンニョムチキン（2人分）": {
    id: "yangnyeom-chicken",
    shortTitle: "ヤンニョムチキン",
    photo: "assets/yangnyeom-chicken.png",
  },
  "サーモンとレモンのやさしいクリームパスタ（1人分）": {
    id: "salmon-lemon-pasta",
    shortTitle: "サーモンレモンパスタ",
    photo: "assets/salmon-lemon-pasta.png",
  },
  "鶏もも肉と丸ごとピーマンの煮物": {
    id: "chicken-green-pepper-nimono",
    shortTitle: "鶏ももピーマン煮物",
    photo: "assets/chicken-green-pepper-nimono.png",
  },
};

const IGNORE_SECTIONS = new Set(["分量", "材料", "カロリー計算", "作り方"]);
const EXTRA_INGREDIENT_SECTIONS = new Set(["ヤンニョムだれ", "煮汁調味料"]);

function cleanInlineMarkdown(text) {
  return text.replace(/\*\*(.*?)\*\*/g, "$1").replace(/`(.*?)`/g, "$1").trim();
}

function fractionToNumber(value) {
  if (value.includes("/")) {
    const [numerator, denominator] = value.split("/").map(Number);
    return numerator / denominator;
  }
  return Number(value);
}

function parseQuantity(amountText) {
  let match;

  match = amountText.match(/^(\d+(?:\.\d+)?)〜(\d+(?:\.\d+)?)(g|ml|cc|cm)$/);
  if (match) return { kind: "range", min: Number(match[1]), max: Number(match[2]), unit: match[3] };

  match = amountText.match(/^(\d+)〜(\d+)(個|本|束|枚)$/);
  if (match) return { kind: "range", min: Number(match[1]), max: Number(match[2]), unit: match[3], whole: true };

  match = amountText.match(/^(\d+(?:\.\d+)?)(g|ml|cc|cm|個|本|束|枚)$/);
  if (match) return { kind: "single", amount: Number(match[1]), unit: match[2], whole: ["個", "本", "束", "枚"].includes(match[2]) };

  match = amountText.match(/^(\d+)\/(\d+)(個|本|束|株)$/);
  if (match) return { kind: "single", amount: Number(match[1]) / Number(match[2]), unit: match[3] };

  match = amountText.match(/^(\d+)\/(\d+)〜(\d+)(個)$/);
  if (match) return { kind: "range", min: Number(match[1]) / Number(match[2]), max: Number(match[3]), unit: match[4] };

  match = amountText.match(/^(大さじ|小さじ)(\d+)と(\d+)\/(\d+)$/);
  if (match) return { kind: "prefixed", prefix: match[1], amount: Number(match[2]) + Number(match[3]) / Number(match[4]) };

  match = amountText.match(/^(大さじ|小さじ)(\d+(?:\/\d+)?)〜(\d+(?:\.\d+)?)$/);
  if (match) return { kind: "prefixed-range", prefix: match[1], min: fractionToNumber(match[2]), max: Number(match[3]) };

  match = amountText.match(/^(大さじ|小さじ)(\d+(?:\/\d+)?)$/);
  if (match) return { kind: "prefixed", prefix: match[1], amount: fractionToNumber(match[2]) };

  match = amountText.match(/^(\d+)個（\d+g）$/);
  if (match) return { kind: "single", amount: Number(match[1]), unit: "個", whole: true };

  return null;
}

function parseTableRows(sectionBody) {
  return sectionBody
    .split(/\r?\n/)
    .filter((line) => /^\|/.test(line) && !/\|---/.test(line) && !/\|\s*材料\s*\|/.test(line))
    .map((line) => line.split("|").slice(1, -1).map((cell) => cell.trim()))
    .filter((cells) => cells.length >= 3)
    .map(([name, amountText]) => {
      const quantity = parseQuantity(amountText);
      return quantity ? { name, amountText, quantity } : { name, amountText };
    });
}

function parseSections(text) {
  const sections = [];
  const regex = /^##\s+(.+)$/gm;
  const matches = [...text.matchAll(regex)];
  for (let index = 0; index < matches.length; index += 1) {
    const title = matches[index][1].trim();
    const start = matches[index].index + matches[index][0].length;
    const end = index + 1 < matches.length ? matches[index + 1].index : text.length;
    sections.push({ title, body: text.slice(start, end).trim() });
  }
  return sections;
}

function parseRecipe(text) {
  const title = text.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const date = text.match(/^作成日:\s*(.+)$/m)?.[1]?.trim() || "";
  const sections = parseSections(text);
  const byTitle = Object.fromEntries(sections.map((section) => [section.title, section.body]));
  const meta = RECIPE_META[title] || {};

  const ingredients = [];
  for (const section of sections) {
    if (section.title === "材料" || EXTRA_INGREDIENT_SECTIONS.has(section.title)) {
      ingredients.push(...parseTableRows(section.body));
    }
  }

  const calorieLines = (byTitle["カロリー計算"] || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^- /, ""))
    .map(cleanInlineMarkdown);

  const steps = [...(byTitle["作り方"] || "").matchAll(/^\d+\.\s+(.+)$/gm)].map((match) => cleanInlineMarkdown(match[1]));

  const noteSections = sections
    .filter((section) => !IGNORE_SECTIONS.has(section.title) && !EXTRA_INGREDIENT_SECTIONS.has(section.title))
    .map((section) => ({
      title: section.title,
      items: section.body
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => line.replace(/^- /, ""))
        .map(cleanInlineMarkdown),
    }))
    .filter((section) => section.items.length > 0);

  const fallbackId = `recipe-${createHash("sha1").update(title).digest("hex").slice(0, 8)}`;

  return {
    id: meta.id || fallbackId,
    title: meta.shortTitle || title.replace(/（[^）]+）/g, "").trim(),
    fullTitle: title,
    date,
    yield: cleanInlineMarkdown((byTitle["分量"] || "").split(/\r?\n/).find((line) => line.trim()) || ""),
    calories: (calorieLines[0] || "").replace(/^\u5408\u8a08:\s*/, ""),
    photo: meta.photo || "assets/kuromame-mushipan.png",
    ingredients,
    calorieNotes: calorieLines,
    steps,
    noteSections,
  };
}

function parseRecipeIndex(text) {
  return [...text.matchAll(/\[\[(.+?)\]\]/g)].map((match) => match[1]);
}

const entries = await fs.readdir(sourceDir);
const recipeFiles = entries.filter((entry) => entry.endsWith(".md") && !entry.startsWith("_"));
const recipesByTitle = new Map();

for (const file of recipeFiles) {
  const text = await fs.readFile(path.join(sourceDir, file), "utf8");
  const recipe = parseRecipe(text);
  recipesByTitle.set(recipe.fullTitle, recipe);
}

const indexText = await fs.readFile(path.join(sourceDir, "_レシピ一覧.md"), "utf8");
const orderedTitles = parseRecipeIndex(indexText);
const orderedRecipes = [
  ...orderedTitles.map((title) => recipesByTitle.get(title)).filter(Boolean),
  ...[...recipesByTitle.values()].filter((recipe) => !orderedTitles.includes(recipe.fullTitle)),
];

await fs.writeFile(outputPath, `window.RECIPE_DATA = ${JSON.stringify(orderedRecipes, null, 2)};\n`, "utf8");
console.log(`Synced ${orderedRecipes.length} recipes to ${outputPath}`);
