//              числа з багатьма нулями
let billion = 1000000000; // можна так записати, але легко помилитись з кількістю нулів
let newBillion = 1e9; // те ж саме, але запис лаконічніший, і важко помилитись
// 9 вказує на кількість нулів після 1
console.log(newBillion); // 1000000000

let ms = 0.000086;
let newMs = 86e-6; // 5 - кількість знаків після коми

console.log(newMs); // 0.000086

//                     зміна типу
let num = 6546;
let string = String(num); // переводимо тип number в тип string
let number = Number(string); // переводимо тип string в тип number

console.log(`${num} тип ${typeof num}`); // 6546 тип number
console.log(`${string} тип ${typeof string}`); // 6546 тип string
console.log(`${number} тип ${typeof number}`); // 6546 тип number

//                     округлення
let a = 7.456;
let b = 9.25866;
let c = 4.964644;

console.log(Math.floor(a)); // 7 - округлення в меншу сторону
console.log(Math.ceil(a)); // 8 - округлення в більшу сторону
console.log(`a = ${Math.round(a)}, b = ${Math.round(b)} c = ${Math.round(c)}`); // a = 7, b = 9 c = 5
// Math.round() - округлення по математичному принципу, тобто менше 5 в меншу сторону, 5 і більше - в більшу
// toFixed() - округляє по Math.round непотрібні знаки після коми і залишає лише ті, які вказали у дужках
console.log(a.toFixed(1)); // 7.5 - залишаємо 1 знак після коми
console.log(c.toFixed(3)); // 4.965 - залишаємо 3 знаки після коми
// звернути увагу на те, що метод toFixed() повертє тип даннх string
console.log(typeof c.toFixed(3)); // string

//            маніпуляції з дробними числами
let firstSum = 0.322 + 0.278; // має бути 0.6, але!!!
console.log(firstSum); // 0.6000000000000001

let secondSum = (0.322 * 10 + 0.278 * 10) / 10;
console.log(secondSum); // 0.6
// інший варіант
console.log(`${firstSum.toFixed(1)} тип ${typeof firstSum.toFixed(1)}`); // 0.6 тип string
firstSum = Number(firstSum.toFixed(1));
console.log(`${firstSum} тип ${typeof firstSum}`); // 0.6 тип number

//                      перевірка на isNaN
console.log(isNaN(NaN)); // true
console.log(isNaN(12)); // false бо 12 являється числом
console.log(isNaN("string")); // true бо "string" не число
console.log(isNaN(true)); // false бо true переводиться в числовий тип данних і стає 1
console.log(isNaN("65")); // false бо "65" переводиться в числовий тип данних і стає 65
console.log(NaN === NaN); // false !!!!!!!!!!!!! така перевірка не діє
console.log(NaN === "str"); // false !!!!!!!!!!!!! така перевірка не діє
console.log(NaN === 12); // false !!!!!!!!!!!!! така перевірка не діє
console.log(NaN === true); // false !!!!!!!!!!!!! така перевірка не діє
console.log(NaN === "65"); // false !!!!!!!!!!!!! така перевірка не діє

//                   перевірка чи являється числом
console.log(`NaN число? ${Number.isFinite(NaN)}`); // NaN число? false
console.log(`12 число? ${Number.isFinite(12)}`); // 12 число? true
console.log(`"string" число? ${Number.isFinite("string")}`); // "string" число? false
console.log(`true число? ${Number.isFinite(true)}`); // true число? false
console.log(`"65" число? ${Number.isFinite("65")}`); // "65" число? false

//                    виокремлення числа з рядка
// чилос має бути першим в рядку і його не мають розділяти символи окрім "."

let price1 = "$100";
let price2 = "100$";
let price3 = "100$ 23 cent";
let price4 = "100.23$";

console.log(parseInt(price1)); // NaN
console.log(parseInt(price2)); // 100
console.log(parseInt(price3)); // 100
console.log(parseInt(price4)); // 100
console.log(parseFloat(price1)); // NaN
console.log(parseFloat(price2)); // 100
console.log(parseFloat(price3)); // 100
console.log(parseFloat(price4)); // 100.23

//                створити випадкове число
// від 0 до k
let k = 10;
let x = Math.random() * k;
console.log(Math.round(x)); // 3

// від min до max
let min = 25;
let max = 50;
let y = Math.random() * (max - min) + min;
console.log(Math.round(y)); // 38

//           отримати максимальне та мінімальне число
console.log(Math.max(45, 98, 3, 96, 56, 5, 23)); // 98
console.log(Math.min(45, 98, 3, 96, 56, 5, 23)); // 3

let arr = [45, 98, 3, 96, 56, 5, 23];

console.log(Math.max(arr)); // Nan
console.log(Math.min(arr)); // Nan

//                   піднести число в степінь
console.log(Math.pow(4, 8)); // 65536         ----- 4 в 8-ій степені
console.log(4 ** 8); //         65536         ----- 4 в 8-ій степені
