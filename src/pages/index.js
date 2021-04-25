import "./index.scss";

const selects = document.querySelectorAll(".logistics__label-input-select");

const textWrapper = document.querySelector(".page__text-length");

const checkSelectColor = (select) => {
  const defaultOption = select.querySelector(
    ".logistics__label-select-option_default"
  );
  if (defaultOption.textContent !== select.value)
    select.style.color = "#000";
  else {
    select.style.color = "#cfcfcf";
  }
  select.size = "1";
  select.blur();
}

const selectOnFocus = (select, optionsCount) => {
  select.size = `${optionsCount}`;
  select.style.position = "relative";
  select.style.zIndex = "1";
  select.style.width = "max-content";
}

const selectOnBlur = (select, selectOffsetWidth) => {
  select.size = "0";
  select.style.position = "unset";
  select.style.zIndex = "0";
  select.style.width = `${selectOffsetWidth}px`;
}

selects.forEach((select) => {
  const selectOffsetWidth = select.offsetWidth;
  const options = select.querySelectorAll('option');

  checkSelectColor(select);
  select.addEventListener("change", (evt) => checkSelectColor(select));
  select.addEventListener("focus", (evt) => selectOnFocus(select, options.length));
  select.addEventListener("blur", (evt) => selectOnBlur(select, selectOffsetWidth));
});
