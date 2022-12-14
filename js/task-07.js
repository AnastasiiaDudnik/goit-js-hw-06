const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", onTxtChange);

function onTxtChange(event) {
  const changeSize = event.currentTarget.value;
  span.style.fontSize = `${changeSize}px`;
}
