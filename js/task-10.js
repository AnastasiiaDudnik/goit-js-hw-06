function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const div = document.querySelector("#controls");
const input = div.firstElementChild;
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
let step = 0;

input.addEventListener("input", createBoxes());
createBtn.addEventListener("click", onBtnclick);
destroyBtn.addEventListener("click", destroyBoxes);

function createBox() {
  const color = getRandomHexColor();

  const firstBox = 30;

  let divBox = document.createElement("div");
  divBox.style.width = `${firstBox}px`;
  divBox.style.height = `${firstBox}px`;
  divBox.style.backgroundColor = color;

  return divBox;
}

function createBoxes(amount) {
  step += 10;

  for (let i = 0; i < amount; i += 1) {
    let divBox = createBox();
    divBox.style.width = `${step}px`;
    divBox.style.height = `${step}px`;

    boxes.append(divBox);
  }
}

function onBtnclick() {
  return createBoxes(input.value);
}

function destroyBoxes() {
  boxes.innerHTML = " ";
}
