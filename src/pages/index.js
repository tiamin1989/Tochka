import "./index.scss";
import * as constants from '../utils/constants';

constants.label.addEventListener("click", constants.toggleCheckbox);
constants.pseudo.addEventListener("click", constants.toggleCheckbox);
constants.to.addEventListener("input", constants.checkAddress);

constants.addressButton.addEventListener("click", () => {
  const textSpan = document.querySelector(".ftl__field-address-message");
  const dateInput = document.querySelector("#date");
  textSpan.textContent = "";
  dateInput.style.display = "block";
});

constants.selects.forEach((select) => {
  const options = select.querySelectorAll("option");
  constants.checkSelectColor(select);
  select.addEventListener("change", () => constants.checkSelectColor(select));
  select.addEventListener("focus", () => constants.selectOnFocus(select, options));
  select.addEventListener("blur", () => constants.selectOnBlur(select));
});
