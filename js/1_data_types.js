// Існує 8 типів данних: number, string, boolean, null, undefined, object, symbol, bigint.
let anyInfo = "some text";
anyInfo = 120; // переприсвоїли тип данних з текстового на числовий
// JavaScript є динамічно-типізованою мовою, в якій дозволяється переприсвоювати змінній різні типи данних.

//                         Числові типи данних
let someNumber = 25; // number
someNumber = 54.65; // number
let word = "word";
let secondNumber = 45;
let result = someNumber / word;

console.log(result); // NaN (Not a Number)

let sum = result + secondNumber;

console.log(sum); // NaN (тому що result теж був Nan)

//                                BigInt
let bigNumber = 2 ** 53; // 2 в 53 степені є вже дуже великим числом і вже відноситься до bigint
let bigNegativeNumber = (-2) ** 53; // те ж саме і з (-2) в 53

//                          Рядкові типи данних
let text = "some 'text'"; // string
console.log(text); // some 'text'

//                    Булевий або логічниу тип данних
let isTrue = true; // boolean
let isFalse = false; // boolean

let anyVariable = 4 < 1;

console.log(anyVariable); // false

//                                null
let firstAge = null; // створюємо змінну з пустим значенням

console.log(firstAge); // null

//                              undefined
let secondAge; // створюємо змінну, але не присвоюємо їй значення
console.log(secondAge); // undefined

//                                Object
let user = {
  name: "Ivan",
  age: 45,
  city: "Dnipro",
}; // object

console.log(user); // {name: 'Ivan', age: 45, city: 'Dnipro'}

//             оператор typeof
//
console.log(typeof someNumber); // number
console.log(typeof text); // string
console.log(typeof isTrue); // boolean
console.log(typeof firstAge); // object      ---!!! баг JavaScript !!!---
console.log(typeof secondAge); // undefined
console.log(typeof user); // object
