// дізнатись кількість символів в рядку
let text = "Hello world";

console.log(text.length); // 11

// дізнатись символ за порядковим номером
console.log(text[0]); // H
console.log(text.charAt(7)); // o

// як замінити символ в рядку за порядковим номером
let anyText = "Wolf";

anyText = anyText[0] + anyText[1] + "r" + anyText[2] + "d";

console.log(anyText); // World

// змінити регістр літер
console.log(text.toUpperCase()); // HELLO WORLD
console.log(text.toLowerCase()); // hello world

// знайти слово в рядку
let someText = "Lorem ipsum dolor sit amet consectetur adipisicing elit amet.";

console.log(someText.indexOf("amet", 0)); // 22 - порядковий номер в рядку першого символа слова, яке ми шукаємо
console.log(someText.indexOf("argentum", 0)); // -1 --- такого слова немає в даному рядку
console.log(someText.indexOf("amet", 23)); // 56

console.log(someText.includes("ipsum")); // true
console.log(someText.includes("argentum")); // false

// взяти символи з рядка за порядковими номерами
console.log(someText.slice(22, 38)); // amet consectetur --- з 22 символу по 37!!! 38 вже не входить
console.log(someText.slice(0, 1)); // L
console.log(someText.slice(51)); // elit amet.
console.log(someText.slice(-3)); // et. --- при від'ємному значенні обрізається з кінця
