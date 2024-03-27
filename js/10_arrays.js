let arr = [45, "yes", undefined, true, 89, "window"];

// як отримати елемент массиву
console.log(arr[0]); // 45
console.log(arr[2]); // undefined
console.log(arr[arr.length - 1]); // "window"
console.log(arr.at(-1)); // "window"
console.log(arr.at(0)); // 45

//як додавати та видаляти елементи массиву
arr[arr.length] = 895;
console.log(arr); // [45, 'yes', undefined, true, 89, 'window', 895]

arr.push("Sun"); //додає елемент в кінець массиву
console.log(arr); // [45, 'yes', undefined, true, 89, 'window', 895, 'Sun']

arr.unshift("Chair"); // додає елемент в початок массиву
console.log(arr); // ['Chair', 45, 'yes', undefined, true, 89, 'window', 895, 'Sun']

arr.pop(); // видаляє останній елемент массиву
arr.shift(); // видаляє перший елемент массиву
console.log(arr); //  [45, 'yes', undefined, true, 89, 'window', 895]

// перебрати массив
for (let arrItem of arr) {
  console.log(arrItem);
}

//

arr[10] = 89;
console.log(arr); // [45, 'yes', undefined, true, 89, 'window', 895, empty × 3, 89]

// видалити елемент всередині массиву
arr.splice(2, 1); // 2 - порядковий номер елементу з якого ми починаємо видаляти, 1 - кількість елементів для видалення
console.log(arr); // [45, 'yes', true, 89, 'window', 895, empty × 3, 89]
arr.splice(6, 3);
console.log(arr); // [45, 'yes', true, 89, 'window', 895, 89]
/* цим методом можна не тільки видаляти елементи, а ще й додавати після видалення
для цього потрібно після другого аргументу вказати елементи які потрібно додати, їх може бути безліч */
arr.splice(2, 1, 45, 89, "table"); // видалимо елемент 'true' і додамо елементи'45, 89, "table"'
console.log(arr); // [45, 'yes', 45, 89, 'table', 89, 'window', 895, 89]
arr.splice(5, 0, "chair"); // просто додамо "chair" без видалення елементів
console.log(arr); // [45, 'yes', 45, 89, 'table', 'chair', 89, 'window', 895, 89]

// створити новий массив на основі існуючого\
let newArr = arr.slice(2, 6); // 2 - з якого елементу починаємо копіювати, 6 - на якому закінчуємо (не включно)
console.log(newArr); // [45, 89, 'table', 'chair']

// Створити загальний массив на основі декількох існуючих
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, 7];
const arr3 = [8, 9];

const genArr = arr1.concat(arr2, arr3, 10, 11); //також ми можемо додати окремі елементи 10, 11
console.log(genArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// перебрати массив за допомогою forEach()
newArr.forEach((item, index, array) => {
  console.log(`Item - ${item}, index - ${index}, array - ${array}`);
  console.log(
    `Item type - ${typeof item}, index type - ${typeof index}, array type - ${typeof array}`
  );
});

// дізнатися чи є елемент в массиві
console.log(newArr.indexOf("table")); // 2 --- порядковий номер елемента в массиві
console.log(newArr.indexOf("book")); // -1 --- такого елемента в массиві немає

console.log(newArr.includes("table")); // true
console.log(newArr.includes("book")); // false

const usersArr = [
  { name: "Vasil", age: 56 },
  { name: "Andriy", age: 33 },
  { name: "Anna", age: 30 },
  { name: "Vitaliy", age: 33 },
  { name: "Anna", age: 25 },
];

const result = usersArr.findIndex((item) => item.name === "Anna"); // виведе тільки один об'єкт
console.log(result); // 2 --- є об'єкт з таким name під індексом 2
const result2 = usersArr.findIndex((item) => item.name === "Ivan");
console.log(result2); // -1 --- немає об'єкта з таким name

const result3 = usersArr.find((item) => item.name === "Anna"); // виведе тільки один об'єкт
console.log(result3); // {name: 'Anna', age: 30}
const result4 = usersArr.find((item) => item.name === "Ivan");
console.log(result4); // undefined
// якщо потрібно вивести всі об'єкти, які мають ідентичні ключі по пошуковому критерію
const result5 = usersArr.filter((item) => item.name === "Anna"); // виведе тільки один об'єкт
console.log(result5); // (2) [{…}, {…}] ==>    0: {name: 'Anna', age: 30}  1: {name: 'Anna', age: 25}
const result6 = usersArr.filter((item) => item.name === "Ivan");
console.log(result6); // []

// отримати новий массив з існуючого, але з одинаково зміненими елементами
const oldArray = [1, 2, 3, 4, 5];

const newArray = oldArray.map((item) => item * 10);
console.log(newArray); // [10, 20, 30, 40, 50]
//
const group = ["Svitlana", "Anna", "Kateryna"];

const newGroup = group.map((item) => "Miss " + item);
console.log(newGroup); // ['Miss Svitlana', 'Miss Anna', 'Miss Kateryna']

// сортування елементів массиву
const numbers = [1, 56, 45, 8, 11, 23, 2, 54, 5, 34, 3, 69];

const sortNumbers1 = numbers.sort(); // не передаємо аргумент в "sort"
console.log(sortNumbers1); // [1, 11, 2, 23, 3, 34, 45, 5, 54, 56, 69, 8] --- сортує по першим цифрам

const sortNumbers2 = numbers.sort((a, b) => a - b);
console.log(sortNumbers2); // [1, 2, 3, 5, 8, 11, 23, 34, 45, 54, 56, 69]

const sortNumbers3 = numbers.sort((a, b) => b - a);
console.log(sortNumbers3); // [69, 56, 54, 45, 34, 23, 11, 8, 5, 3, 2, 1]

// розвернути массив задом наперед
const numbers2 = [1, 56, 45, 8, 11, 23, 2, 54, 5, 34, 3, 69];

const reverseNumbers = numbers2.reverse();
console.log(reverseNumbers); //

// з массива зробити рядок і навпаки
let string1 = numbers2.join();
console.log(string1); // 69,3,34,5,54,2,23,11,8,45,56,1

let string2 = numbers2.join(" - ");
console.log(string2); // 69 - 3 - 34 - 5 - 54 - 2 - 23 - 11 - 8 - 45 - 56 - 1

let string3 = numbers2.join("");
console.log(string3); // 6933455422311845561

const strToArr1 = string3.split();
console.log(strToArr1); // ['6933455422311845561']   !!!!!!!!!!!!!!!!!!!!!

const strToArr2 = string2.split();
console.log(strToArr2); // ['69 - 3 - 34 - 5 - 54 - 2 - 23 - 11 - 8 - 45 - 56 - 1']

const strToArr3 = string1.split();
console.log(strToArr3); // ['69,3,34,5,54,2,23,11,8,45,56,1']

let strToArr4 = string2.split(" - "); // !!!!!!!!!!!!!!!!!!!
console.log(strToArr4); // ['69', '3', '34', '5', '54', '2', '23', '11', '8', '45', '56', '1']
strToArr4 = strToArr4.map((item) => Number(item)); // переводимо в тип number
console.log(strToArr4); // [69, 3, 34, 5, 54, 2, 23, 11, 8, 45, 56, 1]

// додавання значень елементів массиву
newArr = [4, 5, 6, 7, 8, 9];

const reduceArr = newArr.reduce((acc, item) => {
  return acc + item;
}, 0); // 0 - початкове значення acc
console.log(reduceArr);

// перевірка на массив

console.log(Array.isArray(newArr)); // true

//                  Деструктуризація

const arrUsers = [
  "Vitaliy",
  "Andriy",
  "Oleksandr",
  "Dmytro",
  "Oleg",
  "ivan",
  "Viktor",
];
// створити змінні і присвоїти їм значення з массиву
const user1 = arrUsers[0];
const user2 = arrUsers[1];
const user3 = arrUsers[2];
const user4 = arrUsers[3];
const user5 = arrUsers[4];
const user6 = arrUsers[5];
const user7 = arrUsers[6];

console.log(user1, user2, user3, user4, user5, user6, user7); // Vitaliy Andriy Oleksandr Dmytro Oleg ivan Viktor
// інший варіант
const [name1, name2, name3, name4, name5, name6, name7] = arrUsers;

console.log(name1, name2, name3, name4, name5, name6, name7); // Vitaliy Andriy Oleksandr Dmytro Oleg ivan Viktor
// якщо потрібно створити декілька змінних, а те що залиштлось помістити в новий массив
const [usName1, usName2, usName3, ...otherNames] = arrUsers;

console.log(usName1, usName2, usName3); // Vitaliy Andriy Oleksandr
console.log(otherNames); // (4) ['Dmytro', 'Oleg', 'ivan', 'Viktor']
