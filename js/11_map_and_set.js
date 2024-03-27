//                         Map
const map = new Map();
// map схожий на object, але в якості ключів можуть зберігатися будь-які типи данних
map.set("key", "value"); // додає ключ "key" зі значенням "value"
console.log(map.get("key")); // value --- дізнатися значення ключа
console.log(map.has("key")); // true --- дізнатися чи є такий ключ
map.delete("key"); // видаляє ключ
console.log(map.has("key")); // false
map.clear(); // видаляє всі ключі
// додати декілька ключів
map.set(1, "value 1").set(2, "value2").set(3, "value3");
console.log(map.size); // 3
console.log(map); // Map(3) {1 => 'value 1', 2 => 'value2', 3 => 'value3'}
/* головна перевага map над object полягає в тому,
 що ми можемо використовувати в ключах об'єкти */
const user = {
  name: "Vitaliy",
  id: 1,
};

const detailUserInfo = {
  age: 30,
  isMarried: true,
  position: "Front-end developer",
};

const userMap = new Map();

userMap.set(user, detailUserInfo).set("someKey", "someText");

const detailInfo = userMap.get(user);
console.log(user, detailInfo); // {name: 'Vitaliy', id: 1} {age: 30, isMarried: true, position: 'Front-end developer'}
// перебрати ключі map
for (let key of userMap.keys()) {
  console.log(key);
} /*
{name: 'Vitaliy', id: 1}
    id: 1
    name: "Vitaliy"
someKey
*/

// перебрати значення ключів map
for (let value of userMap.values()) {
  console.log(value);
}
/*
{age: 30, isMarried: true, position: 'Front-end developer'}
    age: 30
    isMarried: true
    position: "Front-end developer"
someText
*/

// перебрати ключі map та їх значення
// видасть массиви
for (let value of userMap.entries()) {
  console.log(value);
}
/*
(2) [{…}, {…}]
    0: {name: 'Vitaliy', id: 1}
    1: {age: 30, isMarried: true, position: 'Front-end developer'}
(2) ['someKey', 'someText']
*/

//                         Set
const set = new Set([1, 2, 3, 4, 5, 3, 2, 5, 7]);

console.log(set); // Set(6) {1, 2, 3, 4, 5, 7}
/* як бачимо Set зберігає в собі тільки унікальні значення,
   ті, які повторюються він видаляє */

set.add(9); // додаємо елемент до Set
console.log(set); // Set(7) {1, 2, 3, 4, 5, 7, 9}

set.add(2); // 2 вже є, тому нічого не змінеться
console.log(set); // Set(7) {1, 2, 3, 4, 5, 7, 9}

set.delete(2); // видаляє елемент із Set
console.log(set); // Set(6) {1, 3, 4, 5, 7, 9}

console.log(set.has(1)); // true
console.log(set.has(2)); // false

console.log(set.size); // 6

set.clear();
console.log(set); // Set(0) {size: 0}
