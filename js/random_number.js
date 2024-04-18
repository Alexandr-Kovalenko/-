const generateBtn = document.querySelector("#generateBtn");
const minValue = document.querySelector("#minValue");
const maxValue = document.querySelector("#maxValue");
const result = document.querySelector("#result");

generateBtn.addEventListener("click", () => {
  const max = parseInt(maxValue.value);
  const min = parseInt(minValue.value);
  if (isNaN(min) || isNaN(max) || min > max) {
    result.innerHTML = "Введіть коректне значення";
  } else {
    result.innerHTML = Math.round(Math.random() * (max - min) + min);
  }
});
