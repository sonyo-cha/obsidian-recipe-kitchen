const recipes = window.RECIPE_DATA || [];

const state = {
  recipe: recipes[0] || null,
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

function formatScaledNumber(value, whole = false) {
  if (whole) return String(Math.round(value * 10) / 10).replace(/\.0$/, "");
  if (Math.abs(value - Math.round(value)) < 1e-8) return String(Math.round(value));
  if (Math.abs(value * 2 - Math.round(value * 2)) < 1e-8) {
    return String(Math.round(value * 10) / 10).replace(/\.0$/, "");
  }
  return String(Math.round(value * 100) / 100).replace(/\.0+$/, "");
}

function formatAmount(item, scale) {
  const { quantity, amountText } = item;
  if (!quantity) {
    if (scale === 1) return amountText;
    return /\d/.test(amountText) ? `${amountText} × ${scale}` : amountText;
  }

  if (quantity.kind === "single") {
    return `${formatScaledNumber(quantity.amount * scale, quantity.whole)}${quantity.unit}`;
  }

  if (quantity.kind === "range") {
    const min = formatScaledNumber(quantity.min * scale, quantity.whole);
    const max = formatScaledNumber(quantity.max * scale, quantity.whole);
    return `${min}〜${max}${quantity.unit}`;
  }

  if (quantity.kind === "prefixed") {
    return `${quantity.prefix}${formatScaledNumber(quantity.amount * scale)}`;
  }

  if (quantity.kind === "prefixed-range") {
    const min = formatScaledNumber(quantity.min * scale);
    const max = formatScaledNumber(quantity.max * scale);
    return `${quantity.prefix}${min}〜${max}`;
  }

  return amountText;
}

function renderEmptyState() {
  el.recipeCount.textContent = "0 recipes";
  el.recipeList.innerHTML = '<p class="empty-state">レシピがありません。</p>';
  el.recipeTabs.innerHTML = "";
  el.recipeDetailView.classList.add("hidden");
  el.listButton.classList.add("hidden");
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
    button.textContent = "済";
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
  if (!state.recipe) {
    renderEmptyState();
    return;
  }
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
