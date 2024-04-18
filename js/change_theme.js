const switcher = document.querySelector("#theme-switcher");
const darkThemeValue = !!localStorage.getItem("dark-theme");

if (darkThemeValue) {
  switcher.checked = true;
  document.body.classList.add("dark-theme");
}

switcher.addEventListener("change", (e) => {
  if (e.target.checked) {
    localStorage.setItem("dark-theme", e.target.checked);
  } else {
    localStorage.removeItem("dark-theme");
  }
  document.body.classList.toggle("dark-theme");
});
