// const regexp = new RegExp("шаблон", gi);
// const regexp2 = /шаблон/gi;

const str = "Біжи Форест, біжи";

const result = str.match(/біжи/);
console.log(result); // ['біжи', index: 13, input: 'Біжи Форест, біжи', groups: undefined]

const result2 = str.match(/біжи/i);
console.log(result2); // ['Біжи', index: 0, input: 'Біжи Форест, біжи', groups: undefined]

const result3 = str.match(/біжи/gi);
console.log(result3); // ['Біжи', 'біжи']

const result4 = str.replace(/біжи/, "стій");
console.log(result4); // Біжи Форест, стій

const result5 = str.replace(/біжи/i, "стій");
console.log(result5); // стій Форест, біжи

const result6 = str.replace(/біжи/gi, "стій");
console.log(result6); // стій Форест, стій

const reg = /Форест/gi;
console.log(reg.test(str)); // true

//                      Спецсимволи

/*

\d - цифра
\w - латинська літера та нижнє підкреслення
\s - пробіл
\D - будь-який символ, але не цифра
\b - ставиться на початку та в кінці слова, яке ми хочемо знайти(тобто виділяє початок і кінець слова)
^ - шукати спочатку рядка (ставиться перед символами, які шукаємо)
$ - шукати в кінці рядка (ставиться після символів, які шукаємо)
. - взагалі будь-який символ (9 крапок означають удь-яку кількість будь-яких символів)
[] - діапазон, який включає в себе вказані символи, або вказані діапазони символів
[пгу^рн] - діапазон включає символи "п", "г", "у", але виключає "р", "н"
{2, 5} - діапазон, який показує скільки символів треба шукати (від 2 до 5)
? - лінивий режмим

[] \ ^ $ . | ? + () - символи, які потрібно екранувати зворотнім слешем, у випадку коли ми шукаємо саме ці їх
*/
const tel = "+80(095)227-98-46";
const regExp = /\w/g;
const result7 = tel.match(regExp);

console.log(result7); // ['8', '0', '0', '9', '5', '2', '2', '7', '9', '8', '4', '6']
console.log(result7.join("")); // 800952279846

const str2 = "Я вчу HTML5";
const regExp2 = /\w/gi;
const result8 = str2.match(regExp2);

console.log(result8); // ['H', 'T', 'M', 'L', '5']

const regexp3 = /\s\w{4}\d/;
console.log(str2.match(regexp3)); // [' HTML5', index: 5, input: 'Я вчу HTML5', groups: undefined]

console.log(tel.replace(/\D/g, "")); // 800952279846

const str3 = "Знайти слова ганок та ранок";
const regexp4 = /[гр]анок/g;
const result9 = str3.match(regexp4);

console.log(result9); // ['ганок', 'ранок']

const str4 = `Знайти слова "які" будуть представлені "в" лапках`;
const regexp5 = /".+"/g;
const result10 = str4.match(regexp5);

console.log(result10); // ['"які" будуть представлені "в"']
// але це неправильна відповідь, нам потрібно переключитись з "жадібного" режиму в "лінивий"
const regexp6 = /".+?"/g;
const result11 = str4.match(regexp6);

console.log(result11); // ['"які"', '"в"']
