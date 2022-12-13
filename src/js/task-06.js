const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlur);

function onBlur(event) {
  const current = event.currentTarget;

  console.log(current.dataset.length);
  console.log(current.value.length);

  if (current.value.length === Number(current.dataset.length)) {
    input.classList.add("valid");
  }
  input.classList.add("invalid");
}
