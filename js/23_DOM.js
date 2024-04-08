const div1 = document.getElementById("div1");
const divs = document.querySelectorAll(".div");
const allDivs = document.querySelectorAll("div");
const header = document.querySelector("header");

// setTimeout(() => {
//   divs.forEach((div) => {
//     div.style.fontSize = "30px";
//   });
// }, 3000);

// setTimeout(() => {
//   header.innerHTML += "<div>DIV6</div>";
// }, 5000);

// setTimeout(() => {
//   allDivs.forEach((div) => {
//     div.style.color = "blue";
//   });
// }, 4000);

//         створення нових елементів або вузлів

const newDiv1 = document.createElement("div");
const newDiv2 = document.createElement("div");
const newDiv3 = document.createElement("div");
const newDiv4 = document.createElement("div");

const newDivText1 = document.createTextNode("Some Text prepend in body!");
const newDivText2 = document.createTextNode("Some Text append in body!");
const newDivText3 = document.createTextNode("Some Text before body!");
const newDivText4 = document.createTextNode("Some Text after body!");

newDiv1.prepend(newDivText1);
newDiv2.append(newDivText2);
newDiv3.prepend(newDivText3);
newDiv4.prepend(newDivText4);

const head = document.querySelector("header");

head.prepend(newDiv1); // вставити елемент на початку header
head.append(newDiv2); // вставити елемент в кінці header
head.before(newDiv3); // вставити елемент перед header
head.after(newDiv4); // вставити елемент після header

// setTimeout(()=>{
//   newDiv1.remove();
// }, 6000);

// const newDiv4Clone = newDiv4.cloneNode(true);

// setTimeout(()=>{
//   head.after(newDiv4Clone);
// }, 7000);

//                стилі та класи
const wrapperItem = document.querySelector(".wrapper__item");

setTimeout(()=>{
  wrapperItem.style.left = "30px";
}, 2000);

const div10 = document.getElementById("div10");

console.log(div10.className); // div red-text
// div10.className = "border";
// console.log(div10.className); // border --- тобто класи, які були раніше, просто стираються
console.log(div10.classList); // DOMTokenList(2) ['div', 'red-text', value: 'div red-text']

// додати клас
setTimeout(()=>{
  div10.classList.add("active");
}, 2000);

// видалити клас
setTimeout(()=>{
  div10.classList.remove("active");
}, 4000);

// додати та видалити клас за допомогою toggle
setInterval(()=>{
  div10.classList.toggle("black-border");
  if (div10.classList.contains("black-border")) {
    div10.style.margin = "15px";
  } else {
    div10.style.margin = "16px";
  }
}, 1000);

// перевірити наявність класу
console.log(div10.classList.contains("active")); // false --- тому що setTimeout відпрацьовує пізніше
console.log(div10.classList.contains("red-text")); // true

// як отримати стилі елементу
const styles = getComputedStyle(div10);

console.log(styles);
console.log(styles.padding, typeof(styles.padding)); // 16px string
// щоб отримати число потрібно використати метод parseFloat()
let padding = parseFloat(styles.padding);
console.log(padding, typeof(padding)); // 16 'number'