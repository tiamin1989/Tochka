import "./index.scss";

const selects = document.querySelectorAll(".logistics__label-input-select");

selects.forEach((select) => {
  select.addEventListener("change", (evt) => {
    const defaultOption = evt.target.querySelector(
      ".logistics__label-select-option_default"
    );
    if (defaultOption.textContent !== evt.target.value)
      evt.target.style.color = "#000";
    else evt.target.style.color = "#cfcfcf";
  });
});
