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
      { name: "薄力粉", amount: 80, unit: "g", calories: "約279kcal" },
      { name: "ベーキングパウダー", amount: 4, unit: "g", calories: "約5kcal" },
      { name: "三温糖", amount: 20, unit: "g", calories: "約78kcal" },
      { name: "卵", amount: 1, unit: "個", calories: "約76kcal", whole: true },
      { name: "牛乳", amount: 50, unit: "ml", calories: "約34kcal" },
      { name: "サラダ油", amount: 1, unit: "大さじ", calories: "約111kcal" },
      { name: "黒豆（煮豆）", amount: 50, unit: "g", calories: "約100kcal" },
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
];

const state = {
  recipe: recipes[0],
  scale: 1,
  timerSeconds: 15 * 60,
  timerId: null,
  wakeLock: null,
};

const el = {
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
};

function formatAmount(item, scale) {
  const value = item.amount * scale;
  if (item.whole && value % 1 !== 0) {
    return `${value.toFixed(1).replace(".0", "")}${item.unit}`;
  }
  return `${Number(value.toFixed(1))}${item.unit}`;
}

function renderTabs() {
  el.recipeTabs.innerHTML = "";
  recipes.forEach((recipe) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = recipe.title;
    button.className = recipe.id === state.recipe.id ? "active" : "";
    button.addEventListener("click", () => {
      state.recipe = recipe;
      render();
    });
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

function toggleStep(index) {
  const key = `steps:${state.recipe.id}`;
  const completed = new Set(JSON.parse(localStorage.getItem(key) || "[]"));
  if (completed.has(index)) {
    completed.delete(index);
  } else {
    completed.add(index);
  }
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
  renderTabs();
  renderHero();
  renderIngredients();
  renderCalories();
  renderSteps();
  renderTips();
  renderTimer();
}

document.querySelectorAll("[data-scale]").forEach((button) => {
  button.addEventListener("click", () => setScale(Number(button.dataset.scale)));
});

el.timerButton.addEventListener("click", toggleTimer);
el.resetSteps.addEventListener("click", resetSteps);
el.wakeLockButton.addEventListener("click", toggleWakeLock);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

render();
