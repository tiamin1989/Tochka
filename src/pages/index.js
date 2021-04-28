import "./index.scss";
import * as constants from '../utils/constants';

constants.label.addEventListener("click", constants.toggleCheckbox);
constants.pseudo.addEventListener("click", constants.toggleCheckbox);
constants.to.addEventListener("input", constants.checkAddress);

constants.selects.forEach((select) => {
  const options = select.querySelectorAll("option");
  constants.checkSelectColor(select);
  select.addEventListener("change", (evt) => constants.checkSelectColor(select));
  select.addEventListener("focus", (evt) => constants.selectOnFocus(select, options));
  select.addEventListener("blur", (evt) => constants.selectOnBlur(select));
});






