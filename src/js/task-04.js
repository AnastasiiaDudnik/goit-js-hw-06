const incrementBtn = document.querySelector("[data-action=increment]");
const decrementBtn = document.querySelector("[data-action=decrement]");
const value = document.querySelector("#value");
let step = 0;

incrementBtn.addEventListener("click", onIncrementBtnClick);
decrementBtn.addEventListener("click", onDecrementBtnClick);

function onIncrementBtnClick(event) {
  step += 1;
  value.textContent = `${step}`;
}

function onDecrementBtnClick() {
  step -= 1;
  value.textContent = `${step}`;
}
