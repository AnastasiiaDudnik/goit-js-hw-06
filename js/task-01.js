// const categories = document.querySelector("#categories");
const categories = document.getElementById("categories");
const categoryItems = [...categories.children];

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
