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
      { name: "サラダ油", amount: 1, unit: "大さじ" },
      { name: "黒豆（煮豆）", amount: 50, unit: "g" },
    ],
    calorieNotes: [
      "合計: 約683kcal",
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
    tips: [
      "生地が重くなるので、黒豆は水気を軽く切る。",
      "混ぜすぎると固くなりやすいので、粉が見えなくなったら止めるくらいでOK。",
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
      { name: "しょうゆ", amount: 1, unit: "大さじ" },
      { name: "みりん", amount: 1, unit: "大さじ" },
      { name: "水", amount: 3, unit: "大さじ" },
      { name: "三温糖", amountText: "小さじ1/2〜1" },
      { name: "ごま油", amount: 1, unit: "小さじ" },
      { name: "生姜チューブ", amountText: "2〜3cm" },
    ],
    calorieNotes: [
      "合計: 約130〜136kcal",
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
    tips: [
      "お好みで、かつおぶし・小ねぎ・白ごまを足す。",
      "少しさっぱりさせたい時は、お酢を小さじ1足す。",
      "辛い味で野菜を食べやすくしたい時は、豆板醤を少し足す。",
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
      { name: "しょうゆ", amount: 2, unit: "小さじ" },
      { name: "豆板醤", amount: 1, unit: "小さじ" },
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
      "合計: 約315〜436kcal",
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
    tips: [
      "豆乳を入れる場合は、100ml前後から入れるとスープがまろやかになりやすい。",
      "辛さを控えめにしたい時は、豆板醤を小さじ1/2にする。",
      "しっかり辛くしたい時は、ラー油や唐辛子を少し足す。",
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
  tips: document.querySelector("#tips"),
  servingLabel: document.querySelector("#servingLabel"),
  timerButton: document.querySelector("#timerButton"),
  resetSteps: document.querySelector("#resetSteps"),
  wakeLockButton: document.querySelector("#wakeLockButton"),
  listButton: document.querySelector("#listButton"),
};

function formatScaledText(text, scale) {
  if (scale === 1) return text;
  return `${text} × ${scale}`;
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
      <img src="${recipe.photo}" alt="${recipe.title}の写真" />
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
  el.recipePhoto.alt = `${state.recipe.title}の写真`;
  el.recipeDate.textContent = state.recipe.date;
  el.recipeTitle.textContent = state.recipe.title;
  el.recipeYield.textContent = state.recipe.yield;
  el.recipeCalories.textContent = state.recipe.calories;
}

function renderIngredients() {
  el.servingLabel.textContent = state.scale === 1 ? "標準" : `${state.scale}倍`;
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
    .map((note, index) => (index === 0 ? `<strong>${note.replace("合計: ", "")}</strong>` : `<span>${note}</span>`))
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

function renderTips() {
  el.tips.innerHTML = "";
  state.recipe.tips.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    el.tips.append(li);
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
    el.wakeLockButton.textContent = "固定不可";
    return;
  }

  if (state.wakeLock) {
    await state.wakeLock.release();
    state.wakeLock = null;
    el.wakeLockButton.classList.remove("active");
    el.wakeLockButton.textContent = "調理";
    return;
  }

  try {
    state.wakeLock = await navigator.wakeLock.request("screen");
    el.wakeLockButton.classList.add("active");
    el.wakeLockButton.textContent = "固定中";
    state.wakeLock.addEventListener("release", () => {
      state.wakeLock = null;
      el.wakeLockButton.classList.remove("active");
      el.wakeLockButton.textContent = "調理";
    });
  } catch {
    el.wakeLockButton.textContent = "固定不可";
  }
}

function render() {
  renderList();
  renderTabs();
  renderHero();
  renderIngredients();
  renderCalories();
  renderSteps();
  renderTips();
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
