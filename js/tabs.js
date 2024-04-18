const tabLinks = document.querySelectorAll(".tablinks");
const tabContents = document.querySelectorAll(".tabcontent");

tabLinks[0].classList.add("active");
tabContents[0].classList.add("show");

tabLinks.forEach((tabLink, index) => {
  tabLink.addEventListener("click", () => {
    tabLinks.forEach((item, i) => {
      item.classList.remove("active");
      tabContents[i].classList.remove("show");
    });
    tabLinks[index].classList.add("active");
    tabContents[index].classList.add("show");
  });
});
