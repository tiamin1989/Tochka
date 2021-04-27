import "./index.scss";

const selectHeight = 45;
const optionHeight = 28;
const selects = document.querySelectorAll(".ftl__select");
const isFirefox = typeof InstallTrigger !== "undefined";

const label = document.querySelector("#temperature-label");
const pseudo = document.querySelector("#temperature-pseudo");

const checkSelectColor = (select) => {
  const defaultOption = select.querySelector(".ftl__select-option_default");
  if (defaultOption.textContent !== select.value) select.style.color = "#000";
  else {
    select.style.color = "#cfcfcf";
  }
  select.size = "1";
  select.style.height = `${selectHeight}px`;
  // firefox
  if (isFirefox) select.style.textIndent = "5px";
  select.blur();
};

const selectOnFocus = (select, options) => {
  select.style.zIndex = "2";
  select.selectedIndex = -1;
  select.size = `${options.length}`;
  // firefox & other browsers
  isFirefox
    ? (select.style.height = `${
        optionHeight * options.length + selectHeight
      }px`)
    : (select.style.height = `${
        optionHeight * (options.length - 1) + selectHeight + 7
      }px`);
};

const selectOnBlur = (select) => {
  select.style.zIndex = "0";
  select.size = "0";
  select.style.height = `${selectHeight}px`;
};

const toggleCheckbox = (evt) => {
  const temperCheckbox = document.querySelector("#temperature");
  const temperWrapper = document.querySelector('#temperature-wrapper');

  if (temperCheckbox.checked) {
    temperWrapper.style.display = "none";
    temperCheckbox.checked = false;
    pseudo.classList.remove("ftl__input-checkbox-pseudo_checked");
  } else {
    temperWrapper.style.display = "block";
    temperCheckbox.checked = true;
    pseudo.classList.add("ftl__input-checkbox-pseudo_checked");
  }
}

label.addEventListener("click", toggleCheckbox);
pseudo.addEventListener("click", toggleCheckbox);

selects.forEach((select) => {
  const options = select.querySelectorAll("option");
  checkSelectColor(select);
  select.addEventListener("change", (evt) => checkSelectColor(select));
  select.addEventListener("focus", (evt) => selectOnFocus(select, options));
  select.addEventListener("blur", (evt) => selectOnBlur(select));
});





