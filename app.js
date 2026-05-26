const recipes = [
  {
    id: "kuromame-mushipan",
    title: "黒豆三温糖蒸しパン",
    fullTitle: "黒豆三温糖蒸しパン（卵1個使い切り版）",
    date: "2026-05-26",
    yield: "2〜3個分",
    calories: "約683kcal",
    photo: "assets/kuromame-mushipan.png",
    ingredients: [
      { name: "薄力粉", amount: 80, unit: "g" },
      { name: "ベーキングパウダー", amount: 4, unit: "g" },
      { name: "三温糖", amount: 20, unit: "g" },
      { name: "卵", amount: 1, unit: "個", whole: true },
      { name: "牛乳", amount: 50, unit: "ml" },
      { name: "サラダ油", amountText: "大さじ1" },
      { name: "黒豆（煮豆）", amount: 50, unit: "g" },
    ],
    calorieNotes: [
      "約683kcal",
      "2個に分けた場合: 1個あたり約342kcal",
      "3個に分けた場合: 1個あたり約228kcal",
      "牛乳を無調整豆乳50mlに替える場合: 合計は約670kcal前後",
      "黒豆の甘さや汁気、卵のサイズ、油の実量で少し変わります。",
    ],
    steps: [
      "卵と三温糖をよく混ぜる。",
      "牛乳または豆乳、サラダ油を入れて混ぜる。",
      "薄力粉とベーキングパウダーを入れて、さっくり混ぜる。",
      "黒豆を入れる。少し残して上に乗せてもよい。",
      "カップに7〜8分目まで入れる。",
      "蒸し器かフライパンで12〜15分蒸す。",
    ],
    noteSections: [
      {
        title: "コツ",
        items: [
          "生地が重くなるので、黒豆は水気を軽く切る。",
          "混ぜすぎると固くなりやすいので、粉が見えなくなったら止めるくらいでOK。",
        ],
      },
    ],
  },
  {
    id: "nasu-nibitashi",
    title: "なすの煮びたし",
    fullTitle: "レンジで簡単 なすの煮びたし",
    date: "2026-05-26",
    yield: "2人分",
    calories: "約130〜136kcal",
    photo: "assets/nasu-nibitashi.png",
    ingredients: [
      { name: "なす", amountText: "2本" },
      { name: "しょうゆ", amountText: "大さじ1" },
      { name: "みりん", amountText: "大さじ1" },
      { name: "水", amountText: "大さじ3" },
      { name: "三温糖", amountText: "小さじ1/2〜1" },
      { name: "ごま油", amountText: "小さじ1" },
      { name: "生姜チューブ", amountText: "2〜3cm" },
    ],
    calorieNotes: [
      "約130〜136kcal",
      "1人分: 約65〜68kcal",
      "なすは中サイズ2本、合計160g前後で計算",
      "かつおぶし、小ねぎ、白ごまは量が少なければ大きくは増えない",
      "白ごまを小さじ1足す場合: 約18kcal追加",
    ],
    steps: [
      "なすを縦半分に切り、食べやすい大きさに切る。",
      "耐熱容器に入れて、ごま油をなじませる。",
      "しょうゆ、みりん、水、三温糖、生姜を入れる。",
      "ふんわりラップして、600Wで4〜5分加熱する。",
      "混ぜて、硬ければ30秒ずつ追加で加熱する。",
      "5〜10分置くと味がじわっと入る。冷やしてもおいしい。",
    ],
    noteSections: [
      {
        title: "お好みで",
        items: ["かつおぶし", "小ねぎ", "白ごま"],
      },
      {
        title: "アレンジ",
        items: [
          "少しさっぱりさせたい時は、お酢を小さじ1足す。",
          "辛い味で野菜を食べやすくしたい時は、豆板醤を少し足す。",
        ],
      },
    ],
  },
  {
    id: "yakuzen-malatang",
    title: "薬膳風マーラータン",
    fullTitle: "薬膳風マーラータン（1人前・ダシダ入り）",
    date: "2026-05-26",
    yield: "1人前",
    calories: "約315〜436kcal",
    photo: "assets/malatang.png",
    ingredients: [
      { name: "水", amount: 300, unit: "ml" },
      { name: "ダシダ", amountText: "小さじ1〜1.5" },
      { name: "ホワジャオ", amountText: "小さじ1/2" },
      { name: "シナモンスティック", amountText: "3〜4cm" },
      { name: "スターアニス", amountText: "1/2〜1個" },
      { name: "しょうゆ", amountText: "小さじ2" },
      { name: "豆板醤", amountText: "小さじ1" },
      { name: "にんにくチューブ", amountText: "小さじ1/2" },
      { name: "生姜チューブ", amountText: "小さじ1/2" },
      { name: "白菜", amountText: "2枚" },
      { name: "豆苗", amountText: "ひとつかみ" },
      { name: "しめじ", amountText: "1/4株" },
      { name: "豆腐", amount: 80, unit: "g" },
      { name: "豚しゃぶ肉", amount: 50, unit: "g" },
      { name: "春雨", amountText: "20〜30g" },
    ],
    calorieNotes: [
      "約315〜436kcal",
      "豚しゃぶ肉は部位によって差が大きいので幅を持たせて計算",
      "春雨は乾燥重量20〜30gで計算",
      "豆乳は分量未記載のため、上の合計には含めない",
      "豆乳を100ml入れる場合: 約46kcal追加",
    ],
    steps: [
      "鍋でホワジャオ、スターアニス、シナモンスティックを弱火で30秒くらい乾煎りする。",
      "水、ダシダ、しょうゆ、豆板醤、にんにく、生姜を入れる。",
      "野菜、肉、春雨を入れて煮る。",
      "最後に豆乳を入れて軽く温める。",
      "スパイスを取り出して完成。",
    ],
    noteSections: [
      {
        title: "メモ",
        items: [
          "豆乳を入れる場合は、100ml前後から入れるとスープがまろやかになりやすい。",
          "辛さを控えめにしたい時は、豆板醤を小さじ1/2にする。",
          "しっかり辛くしたい時は、ラー油や唐辛子を少し足す。",
        ],
      },
    ],
  },
  {
    id: "yangnyeom-chicken",
    title: "ヤンニョムチキン",
    fullTitle: "ヤンニョムチキン（2人分）",
    date: "2026-05-26",
    yield: "2人分",
    calories: "約707kcal + 焼き油分",
    photo: "assets/yangnyeom-chicken.png",
    ingredients: [
      { name: "鶏もも肉", amount: 250, unit: "g" },
      { name: "塩こしょう", amountText: "少々" },
      { name: "片栗粉", amountText: "大さじ3" },
      { name: "ケチャップ", amountText: "大さじ2" },
      { name: "コチュジャン", amountText: "大さじ1" },
      { name: "しょうゆ", amountText: "小さじ1" },
      { name: "三温糖", amountText: "大さじ1" },
      { name: "はちみつ", amountText: "小さじ1" },
      { name: "にんにくチューブ", amountText: "小さじ1" },
      { name: "水", amountText: "大さじ1" },
    ],
    calorieNotes: [
      "約707kcal + 焼き油分",
      "1人分: 約354kcal + 焼き油分",
      "焼き油を小さじ1ぶん吸う場合: 約37kcal追加",
      "焼き油を大さじ1ぶん吸う場合: 約111kcal追加",
      "はちみつを抜く場合: 約21kcal減",
      "鶏むね肉250gで作る場合: 合計から約120〜160kcal減",
      "ささみ250gで作る場合: 合計から約210kcal前後減",
    ],
    steps: [
      "鶏肉をひと口大に切って、塩こしょうをする。",
      "片栗粉をまぶす。",
      "フライパンに少し多めの油を入れて焼く。揚げなくてOK。",
      "火が通ったら、余分な油を軽く拭く。",
      "ヤンニョムだれの材料を全部入れて絡める。",
      "とろっとしたら完成。",
    ],
    noteSections: [
      {
        title: "仕上げ",
        items: ["白ごま", "刻みねぎ", "ゆで卵"],
      },
      {
        title: "油少なめ版",
        items: [
          "鶏肉をささみに替える。",
          "はちみつを抜く。",
          "コチュジャンを少し増やす。",
        ],
      },
    ],
  },
  {
    id: "salmon-lemon-pasta",
    title: "サーモンレモンパスタ",
    fullTitle: "サーモンとレモンのやさしいクリームパスタ（1人分）",
    date: "2026-05-26",
    yield: "1人分",
    calories: "約591〜742kcal",
    photo: "assets/salmon-lemon-pasta.png",
    ingredients: [
      { name: "パスタ", amountText: "80〜100g" },
      { name: "サーモン", amountText: "70〜80g" },
      { name: "玉ねぎ", amountText: "1/4個" },
      { name: "しめじ", amountText: "1/4株" },
      { name: "ほうれん草または小松菜", amountText: "1/2束" },
      { name: "にんにく", amountText: "小さじ1/2" },
      { name: "牛乳", amount: 100, unit: "ml" },
      { name: "粉チーズ", amountText: "大さじ1" },
      { name: "バター", amount: 5, unit: "g" },
      { name: "レモン汁", amountText: "大さじ1/2〜1" },
      { name: "塩こしょう", amountText: "少々" },
      { name: "オリーブオイル", amountText: "小さじ1" },
    ],
    calorieNotes: [
      "約591〜742kcal",
      "サーモンは種類や脂ののりで差が大きいので幅を持たせて計算",
      "パスタ80gの場合は低め、100gの場合は高め",
      "ミニトマト3〜4個を追加する場合: 約10〜15kcal追加",
    ],
    steps: [
      "パスタを茹でる。茹で汁を大さじ2〜3残しておく。",
      "フライパンでオリーブオイルとにんにくを軽く温める。",
      "玉ねぎ、しめじ、サーモンの順に炒める。",
      "牛乳、バター、粉チーズを入れる。",
      "パスタとほうれん草または小松菜を加える。",
      "火を弱めて、最後にレモン汁を入れる。",
      "塩こしょうで調整して完成。",
    ],
    noteSections: [
      {
        title: "お好みで",
        items: ["ブラックペッパー", "パセリ", "ミニトマト3〜4個"],
      },
      {
        title: "コツ",
        items: [
          "レモンは最後に入れると香りが飛びにくい。",
          "サーモンは焼きすぎるとパサつくので、表面に火が通るくらいでOK。",
          "ミニトマトを追加すると、レモンの爽やかさと相性がよく、色もきれいになる。",
        ],
      },
    ],
  },
  {
    id: "chicken-green-pepper-nimono",
    title: "鶏ももピーマン煮物",
    fullTitle: "鶏もも肉と丸ごとピーマンの煮物",
    date: "2026-05-26",
    yield: "全量",
    calories: "約628kcal",
    photo: "assets/chicken-green-pepper-nimono.png",
    ingredients: [
      { name: "鶏もも肉（唐揚げ用）", amount: 250, unit: "g" },
      { name: "ピーマン", amountText: "5個（150g）" },
      { name: "水", amount: 150, unit: "cc" },
      { name: "酒", amountText: "大さじ1" },
      { name: "みりん", amountText: "大さじ2" },
      { name: "しょうゆ", amountText: "大さじ1と1/2" },
      { name: "唐辛子", amountText: "1本" },
    ],
    calorieNotes: [
      "約628kcal",
      "2人分にする場合: 1人分約314kcal",
      "3人分にする場合: 1人分約209kcal",
      "煮汁を残す場合、実際に食べるカロリーは少し下がる可能性あり",
    ],
    steps: [
      "鍋に煮汁調味料と鶏肉を入れる。",
      "ピーマンを手でぎゅっとにぎってつぶし、鍋に加える。",
      "ふたをして弱めの中火にかけ、煮立たせる。",
      "アクをすくう。",
      "再度ふたをし、7〜9分ほど弱めの中火で煮る。",
      "途中で鶏肉とピーマンの上下を返す。",
    ],
    noteSections: [
      {
        title: "ポイント",
        items: [
          "ピーマンはヘタのまわりなどをよく洗う。",
          "種は取り除かなくても食べられる。",
          "種やわたの食感が気になる場合は、取り除いて作る。",
          "唐辛子は省いてもおいしく作れる。",
        ],
      },
    ],
  },
];

const state = {
  recipe: recipes[0],
  scale: 1,
  timerSeconds: 15 * 60,
  timerId: null,
  wakeLock: null,
  view: "list",
};

const el = {
  recipeListView: document.querySelector("#recipeListView"),
  recipeDetailView: document.querySelector("#recipeDetailView"),
  recipeList: document.querySelector("#recipeList"),
  recipeCount: document.querySelector("#recipeCount"),
  recipeTabs: document.querySelector("#recipeTabs"),
  recipePhoto: document.querySelector("#recipePhoto"),
  recipeDate: document.querySelector("#recipeDate"),
  recipeTitle: document.querySelector("#recipeTitle"),
  recipeYield: document.querySelector("#recipeYield"),
  recipeCalories: document.querySelector("#recipeCalories"),
  ingredients: document.querySelector("#ingredients"),
  calories: document.querySelector("#calories"),
  steps: document.querySelector("#steps"),
  notes: document.querySelector("#notes"),
  servingLabel: document.querySelector("#servingLabel"),
  timerButton: document.querySelector("#timerButton"),
  resetSteps: document.querySelector("#resetSteps"),
  wakeLockButton: document.querySelector("#wakeLockButton"),
  listButton: document.querySelector("#listButton"),
};

function formatScaledText(text, scale) {
  if (scale === 1) return text;
  return `${text} ×${scale}`;
}

function formatAmount(item, scale) {
  if (item.amountText) return formatScaledText(item.amountText, scale);
  const value = item.amount * scale;
  if (item.whole && value % 1 !== 0) return `${value.toFixed(1).replace(".0", "")}${item.unit}`;
  return `${Number(value.toFixed(1))}${item.unit}`;
}

function renderList() {
  el.recipeCount.textContent = `${recipes.length} recipes`;
  el.recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "recipe-card";
    button.innerHTML = `
      <img src="${recipe.photo}" alt="${recipe.fullTitle}の写真" loading="lazy" />
      <span class="recipe-card-copy">
        <strong>${recipe.fullTitle}</strong>
        <span>${recipe.yield} / ${recipe.calories}</span>
      </span>
    `;
    button.addEventListener("click", () => openRecipe(recipe.id));
    el.recipeList.append(button);
  });
}

function renderTabs() {
  el.recipeTabs.innerHTML = "";
  recipes.forEach((recipe) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = recipe.title;
    button.className = recipe.id === state.recipe.id ? "active" : "";
    button.addEventListener("click", () => openRecipe(recipe.id));
    el.recipeTabs.append(button);
  });
}

function renderHero() {
  el.recipePhoto.src = state.recipe.photo;
  el.recipePhoto.alt = `${state.recipe.fullTitle}の写真`;
  el.recipeDate.textContent = state.recipe.date;
  el.recipeTitle.textContent = state.recipe.fullTitle;
  el.recipeYield.textContent = state.recipe.yield;
  el.recipeCalories.textContent = state.recipe.calories;
}

function renderIngredients() {
  el.servingLabel.textContent = state.scale === 1 ? "標準量" : `${state.scale}倍量`;
  el.ingredients.innerHTML = "";
  state.recipe.ingredients.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="ingredient-name">${item.name}</span>
      <span class="ingredient-amount">${formatAmount(item, state.scale)}</span>
    `;
    el.ingredients.append(li);
  });
}

function renderCalories() {
  el.calories.innerHTML = state.recipe.calorieNotes
    .map((note, index) => (index === 0 ? `<strong>${note}</strong>` : `<span>${note}</span>`))
    .join("");
}

function renderSteps() {
  el.steps.innerHTML = "";
  const completed = JSON.parse(localStorage.getItem(`steps:${state.recipe.id}`) || "[]");
  state.recipe.steps.forEach((step, index) => {
    const li = document.createElement("li");
    if (completed.includes(index)) li.classList.add("done");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "step-check";
    button.textContent = "✓";
    button.setAttribute("aria-label", `${index + 1}番目の手順を完了`);
    button.addEventListener("click", () => toggleStep(index));

    const text = document.createElement("span");
    text.className = "step-text";
    text.textContent = `${index + 1}. ${step}`;

    li.append(button, text);
    el.steps.append(li);
  });
}

function renderNotes() {
  el.notes.innerHTML = "";
  state.recipe.noteSections.forEach((section) => {
    const wrapper = document.createElement("section");
    wrapper.className = "note-section";

    const heading = document.createElement("h4");
    heading.textContent = section.title;

    const list = document.createElement("ul");
    list.className = "tips";

    section.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.append(li);
    });

    wrapper.append(heading, list);
    el.notes.append(wrapper);
  });
}

function renderView() {
  const isList = state.view === "list";
  el.recipeListView.classList.toggle("hidden", !isList);
  el.recipeDetailView.classList.toggle("hidden", isList);
  el.listButton.classList.toggle("hidden", isList);
}

function openRecipe(id) {
  const recipe = recipes.find((item) => item.id === id);
  if (!recipe) return;
  state.recipe = recipe;
  state.scale = 1;
  state.view = "detail";
  document.querySelectorAll("[data-scale]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.scale) === 1);
  });
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openList() {
  state.view = "list";
  renderView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleStep(index) {
  const key = `steps:${state.recipe.id}`;
  const completed = new Set(JSON.parse(localStorage.getItem(key) || "[]"));
  if (completed.has(index)) completed.delete(index);
  else completed.add(index);
  localStorage.setItem(key, JSON.stringify([...completed]));
  renderSteps();
}

function resetSteps() {
  localStorage.removeItem(`steps:${state.recipe.id}`);
  renderSteps();
}

function setScale(scale) {
  state.scale = scale;
  document.querySelectorAll("[data-scale]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.scale) === scale);
  });
  renderIngredients();
}

function renderTimer() {
  const minutes = Math.floor(state.timerSeconds / 60).toString().padStart(2, "0");
  const seconds = (state.timerSeconds % 60).toString().padStart(2, "0");
  el.timerButton.textContent = `${minutes}:${seconds}`;
}

function toggleTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
    el.timerButton.classList.remove("running");
    return;
  }

  if (state.timerSeconds <= 0) state.timerSeconds = 15 * 60;
  el.timerButton.classList.add("running");
  state.timerId = setInterval(() => {
    state.timerSeconds -= 1;
    renderTimer();
    if (state.timerSeconds <= 0) {
      clearInterval(state.timerId);
      state.timerId = null;
      el.timerButton.classList.remove("running");
      navigator.vibrate?.([180, 80, 180]);
    }
  }, 1000);
}

async function toggleWakeLock() {
  if (!("wakeLock" in navigator)) {
    el.wakeLockButton.textContent = "未対応";
    return;
  }

  if (state.wakeLock) {
    await state.wakeLock.release();
    state.wakeLock = null;
    el.wakeLockButton.classList.remove("active");
    el.wakeLockButton.textContent = "調理モード";
    return;
  }

  try {
    state.wakeLock = await navigator.wakeLock.request("screen");
    el.wakeLockButton.classList.add("active");
    el.wakeLockButton.textContent = "画面キープ中";
    state.wakeLock.addEventListener("release", () => {
      state.wakeLock = null;
      el.wakeLockButton.classList.remove("active");
      el.wakeLockButton.textContent = "調理モード";
    });
  } catch {
    el.wakeLockButton.textContent = "未対応";
  }
}

function render() {
  renderList();
  renderTabs();
  renderHero();
  renderIngredients();
  renderCalories();
  renderSteps();
  renderNotes();
  renderTimer();
  renderView();
}

document.querySelectorAll("[data-scale]").forEach((button) => {
  button.addEventListener("click", () => setScale(Number(button.dataset.scale)));
});

el.timerButton.addEventListener("click", toggleTimer);
el.resetSteps.addEventListener("click", resetSteps);
el.wakeLockButton.addEventListener("click", toggleWakeLock);
el.listButton.addEventListener("click", openList);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

render();
