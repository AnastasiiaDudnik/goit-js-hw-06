const incrementBtn = document.querySelector("[data-action=increment]");
const decrementBtn = document.querySelector("[data-action=decrement]");
const value = document.querySelector("#value");
let counterValue = 0;

incrementBtn.addEventListener("click", onIncrementBtnClick);
decrementBtn.addEventListener("click", onDecrementBtnClick);

function onIncrementBtnClick(event) {
  counterValue += 1;
  value.textContent = `${counterValue}`;
}

function onDecrementBtnClick() {
  counterValue -= 1;
  value.textContent = `${counterValue}`;
}
