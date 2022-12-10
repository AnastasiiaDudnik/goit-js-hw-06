const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

// 1 спосіб

// const potatoLi = document.createElement("li");
// potatoLi.classList.add("item");
// potatoLi.textContent = "Potatoes";

// const mushroomLi = document.createElement("li");
// mushroomLi.classList.add("item");
// mushroomLi.textContent = "Mushrooms";

// const garlicLi = document.createElement("li");
// garlicLi.classList.add("item");
// garlicLi.textContent = "Garlic";

// const tomatoLi = document.createElement("li");
// tomatoLi.classList.add("item");
// tomatoLi.textContent = "Tomatos";

// const herbsLi = document.createElement("li");
// herbsLi.classList.add("item");
// herbsLi.textContent = "Herbs";

// const condimentLi = document.createElement("li");
// condimentLi.classList.add("item");
// condimentLi.textContent = "Condiments";

// list.append(potatoLi, mushroomLi, garlicLi, tomatoLi, herbsLi, condimentLi);

// 2 спосіб

const createEl = (array) => {
  return array.map((ingridient) => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = ingridient;
    return liEl;
  });
};

const elements = createEl(ingredients);
list.append(...elements);
