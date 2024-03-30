function showMessage(name = "Хто ти такий?") {
  console.log(`Hello ${name}`);
}

showMessage("Ivan");
showMessage("Tanya");
showMessage("Anna");
showMessage();

let x = 23;
let y = 895;

function summ(x, y) {
  return x + y;
}

console.log(`Сума чисел ${x} та ${y} = ${summ(x, y)}`);

//      FUNCTION DECLARATION & FUNCTION EXPRESSION
let alertMessage1 = function () {
  alert("Message 1");
};

function alertMessage2() {
  alert("Message 2");
}

console.log(alertMessage1); //ƒ () {alert("Message 1");}
console.log(alertMessage2); //ƒ alertMessage2() {alert("Message 2");}

// console.log(alertMessage1()); // undefined --- відпрацював alert
// console.log(alertMessage2()); // undefined --- відпрацював alert

//---------------------------
def1(89, 21);

function def1(a, b) {
  console.log(a - b); // 68
}
//---------------------------
// def2(89, 21); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let def2 = function (a, b) {
//   console.log(a - b); // 6_functions.js:41 Uncaught ReferenceError: Cannot access 'def2' before initialization
// };
// в цьому випадку ми НЕ МОЖЕМО викликати функцію до її оголошення

//---------------------------
let def3 = function (a, b) {
  console.log(a - b); // 68
};

def3(89, 21);

// стрілочна функція

const def4 = (a, b) => a - b;

console.log(def4(89, 21)); // 68

//                 Деструктуризація
const anyFunc = function (name, age, isMarried, city, country) {
  console.log(name, age, isMarried, city, country);
};
/* нам потрібно передати дані в функцію і їх може бути дуже багато,
тут дуже важливо запам'ятати порядок передачі */
anyFunc("Oleksandr", 35, true, "Dnipro", "Ukraine"); // Oleksandr 35 true Dnipro Ukraine

/* можна створити об'єкт з параметрами і тоді 
неважливо в якій послідовності їх передавати */
const someFunc = function ({ isMarried, country, name, age, city }) {
  // зверни увагу на порядок в умові і порівняй з першим варіантом
  console.log(name, age, isMarried, city, country);
};

const parametries = {
  name: "Oleksandr",
  city: "Dnipro",
  age: 35,
  isMarried: true,
  country: "Ukraine",
};

someFunc(parametries); // Oleksandr 35 true Dnipro Ukraine

//                        Рекурсія
/* Задача: число "х" помножити саме на себе "n" разів*/

const pow = (x, n) => {
  let result = 1;

  for (let i = 0; i < n; n--) {
    result *= x;
  }

  return result;
};

console.log(pow(5, 4)); // 625

/* Інший варіант розв'язання а допомогою рекурсії */

const pow2 = (x, n) => {
  if (n === 1) {
    console.log(`xIf = ${x}`);
    return x;
  } else {
    console.log(`xElse = ${x}`);
    return x * pow2(x, n - 1);
  }
};

console.log(pow2(5, 4)); // 625

/* як виконується код покроково */
// 1) Контекст х = 5, n = 4, зупинились на рядку 109
// 2) Контекст х = 5, n = 3, зупинились на рядку 109
// 3) Контекст х = 5, n = 2, зупинились на рядку 109
// 4) Контекст х = 5, n = 1, зупинились на рядку 106
/* 109 return"n=4" (х * (109 return"n=3" (х * (109 return"n=2" (х * (106 return"n=1" (x)))))))
Тобто виходить такий ланцюжок: 5 * 5 * 5 * 5, який буде дорівнювати 625 */
