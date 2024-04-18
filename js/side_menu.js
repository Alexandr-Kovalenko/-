const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("nav");
const menu = document.querySelector("#menu");
const links = document.querySelectorAll(".link-menu");

const handleChangeMenu = () => {
  menuButton.classList.toggle("active");
  menuButton.innerHTML = menuButton.classList.contains("active")
    ? "&#10006;"
    : "&#9776;";
  nav.classList.toggle("active");
  menu.classList.toggle("active");
};

menuButton.addEventListener("click", handleChangeMenu);

links.forEach((link) => link.addEventListener("click", handleChangeMenu));
