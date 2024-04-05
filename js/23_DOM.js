const div1 = document.getElementById("div1");
const divs = document.querySelectorAll(".div");
const allDivs = document.querySelectorAll("div");
const header = document.querySelector("header");

setTimeout(() => {
  divs.forEach((div) => {
    div.style.fontSize = "30px";
  });
}, 3000);

setTimeout(() => {
  header.innerHTML += "<div>DIV6</div>";
}, 5000);

setTimeout(() => {
  allDivs.forEach((div) => {
    div.style.color = "blue";
  });
}, 4000);
