import "./index.scss";

const selects = document.querySelectorAll(".logistics__label-input-select");

const checkOption = (select) => {
  const defaultOption = select.querySelector(
    ".logistics__label-select-option_default"
  );
  if (defaultOption.textContent !== select.value)
    select.style.color = "#000";
  else select.style.color = "#cfcfcf";
}

selects.forEach((select) => {
  checkOption(select);
  select.addEventListener("change", (evt) => checkOption(evt.target));
});
