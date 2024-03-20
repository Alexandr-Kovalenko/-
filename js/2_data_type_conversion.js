//             перетворення в рядковий тип данних
let anyNumber = 20 * 2;
let newAnyVariable = String(anyNumber);

console.log(typeof anyNumber); // number
console.log(anyNumber); // 40
console.log(newAnyVariable); // 40
console.log(typeof newAnyVariable); // string
// аналогічно і для true, null, undefined

//            перетворення в числовий тип данних
let variable = "6" / 2;

console.log(variable); // 3  JavaScript cам еретворив "6" в число
console.log(typeof variable); // number

// але якщо буде знак "+", то це буде конкатенація
let variable2 = "6" + 2;

console.log(variable2); // 62
console.log(typeof variable2); // string
// інший цікавий варіант з true та false
// true перетворюється на 1, а false на 0
let resultTrue = true + true; // 1 + 1
let resultTrueFalse = true + false; // 1 + 0
let resultFalse = false + false; // 0 + 0

console.log(resultTrue); // 2
console.log(resultTrueFalse); // 1
console.log(resultFalse); // 0
console.log(typeof resultTrueFalse); // number

let text = "145";
let toNumber = Number(text);

console.log(text); // 145
console.log(typeof text); // string
console.log(toNumber); // 145
console.log(typeof toNumber); // number
// інший варіант перетворення в число
let numberText = "2489";
let number = +numberText;

console.log(number); //2489
console.log(typeof number); // number
// можна зробити ще простіше
numberText = +numberText;

console.log(numberText); // 2489
console.log(typeof numberText); // number

// варіанти з іншими типами
let numberBoolean = true;
numberBoolean = +numberBoolean;

console.log(numberBoolean); // 1
console.log(typeof numberBoolean); //number

let numberNull = null;
numberNull = +numberNull;

console.log(numberNull); // 0
console.log(typeof numberNull); // number

let numberUndefined;
numberUndefined = +numberUndefined;

console.log(numberUndefined); // NaN
console.log(typeof numberUndefined); // number

//            перетворення в логічний тип данних
let booleanText = "text";
let bool = Boolean(booleanText);

console.log(bool); // true
console.log(typeof bool); // boolean

booleanText = "";
bool = Boolean(booleanText);

console.log(bool); // false
console.log(typeof bool); // boolean

// те ж саме з числовими
let booleanNumber = 456; // може бути будь-яке додатнє чи від'ємне число
let boolNumber = Boolean(booleanNumber);

console.log(boolNumber); // true
console.log(typeof boolNumber); // boolean

booleanNumber = 0;
boolNumber = Boolean(booleanNumber);

console.log(boolNumber); // false
console.log(typeof boolNumber); // boolean
