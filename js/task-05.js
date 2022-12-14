const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  //   refs.span.textContent = refs.input.value;
  const target = event.currentTarget.value;
  refs.span.textContent = target;

  if (!target) {
    refs.span.textContent = "Anonymous";
  }
}
