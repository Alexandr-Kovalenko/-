const user = {
  name: "Anna",
  age: 23,
  likeFlowers: true,
}; // перший варіант створення об'єкту

let newUser = new Object(); // другий варіант створення об'єкту

console.log(user.age); // видасть в консоль ключ age об'єкта user

user.lastName = "Eremenko"; // додаємо новий ключ lastName об'єкту user
console.log(user.lastName);

delete user.likeFlowers; // видаляємо ключ likeFlowers у об'єкта user
console.log(user);

user["like read a book"] = true; // синтаксис маніпулцій з ключем, котрий складається з декількох слів
console.log(user);
console.log(user["like read a book"]);
user["like read a book"] = false;

// створення об'ктів за допомогою функції
function createUser(name, lastName, age, city) {
  return {
    userName: name,
    userLastName: lastName,
    userAge: age,
    userCity: city,
  };
}

const userIvan = createUser("Ivan", "Ivanov", 28, "Lviv");
const userVitaliy = createUser("Vitaliy", "Eremenko", 30, "Kharkiv");

console.log(userIvan);
console.log(userVitaliy);

// перевірка наявності ключа в об'єкті

console.log("likaFlowers" in userIvan); // false
console.log("age" in userIvan); // false
console.log("userAge" in userIvan); // true

// як перебрати всі ключі об'єкта

for (let key in userIvan) {
  console.log(key);
}

// як перебрати всі значення ключів об'єкта

for (let key in userIvan) {
  console.log(userIvan[key]);
}

for (let key in userVitaliy) {
  console.log(userVitaliy[key]);
}

// як перебрати всі ключі об'єкта та їх значення
for (let key in userIvan) {
  console.log(`${key} --- ${userIvan[key]}`);
}

//            копіювання об'єктів
// при копіюванні об'єктів не відбувається копіювання ключів і їх значень, як в
// звичайних змінних, а створюється посилання на об'єкт

let a = {
  value: 45,
};
let b = {};
console.log(a); // {value: 45}
console.log(b); // {}

b = a; // спроба скопіювати об'єкт

console.log(a); // {value: 45}
console.log(b); // {value: 45} --- але це скопіюваллося лише посилання на об'єкт, якщо
// ми змінимо значення ключа value в об'єкті "b" на якесь інше, то в об'єкті "a" воно теж зміниться!!!
b.value += 20;
console.log(a); // {value: 65}
console.log(b); // {value: 65}

// щоб скопіювати без посилання ключі і їх значення потрібно використати цикл "for"
let obj1 = {
  name: "Anna",
  number: 87,
  city: "Lviv",
};
let obj2 = {};

console.log(obj1); // {name: 'Anna', number: 87, city: 'Lviv'}
console.log(obj2); // {}

for (let key in obj1) {
  obj2[key] = obj1[key];
}

console.log(obj2); // {name: 'Anna', number: 87, city: 'Lviv'}

obj1.name = "Tanya";
obj1.number = 5463;
obj1.city = "Dnipro";

console.log(obj1); // {name: 'Tanya', number: 5463, city: 'Dnipro'}
console.log(obj2); // {name: 'Anna', number: 87, city: 'Lviv'}
// як бачимо нам вдалося скопіювати об'єкт, не копіюючи посилання

//        інший варіант копіювання
let obj = {
  name: "Victor",
  number: 415,
  city: "Ternopil",
};
let cloneObj = {};

cloneObj = Object.assign({}, obj);

console.log(obj); // {name: 'Victor', number: 415, city: 'Ternopil'}
console.log(cloneObj); // {name: 'Victor', number: 415, city: 'Ternopil'}
// але ми ще можемо скопіювати в нього ключі зі значеннями третього об'єкту

let obj3 = {
  name: "Alex",
  lastName: "Kovalenko",
};

cloneObj = Object.assign({}, obj, obj3);
console.log(cloneObj); // {name: 'Alex', number: 415, city: 'Ternopil', lastName: 'Kovalenko'}
// якщо назви ключів збігаються, як наприклад "name", то значення записуються останнього
// АЛЕ!!! якщо в ключі зберігається ще один об'єкт, то буде скопійоване псилання !!!!!!!!!!!!!!

//                     Методи об'єктів

let ivan = {
  name: "Ivan",
  age: 45,
};

ivan.sayHi = function () {
  console.log(`Hello, my name is ${this.name}`); // ми додали функцію в об'єкт, яка азивається методом
};

ivan.sayHi();
// інший варіант присвоєння метода об'єкту

function sayAge() {
  console.log(`My age - ${this.age}`);
}

ivan.sayAge = sayAge;

ivan.sayAge();

let anna = Object.assign({}, ivan);
anna.name = "Anna";
anna.age = 26;

anna.sayHi();
anna.sayAge();

//             конструктор об'єктів
function User(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.sayHello = function () {
    console.log(`Hello, i'm ${this.name}`);
  };
}

let alex = new User("Alex", 35, "Dnipro");
let yulia = new User("Yulia", 31, "Dnipro");

console.log(alex); // User {name: 'Alex', age: 35, city: 'Dnipro', sayHello: ƒ}
alex.sayHello(); // Hello, i'm Alex
console.log(yulia); // User {name: 'Yulia', age: 31, city: 'Dnipro', sayHello: ƒ}
yulia.sayHello(); // Hello, i'm Yulia

//            опціональний ланцюжок
const user1 = {
  name: "Vitaliy",
  age: 30,
  address: {
    street: {
      name: "Svobody",
    },
  },
};

const user2 = {
  name: "Anna",
  age: 28,
};

const getUserAddress = (obj) => {
  // console.log(obj.address.street); ----- вираз видасть помилку у разі відсутності ключа address
  console.log(obj.address?.street?.name); // в разі відсутності отримаємо undefined
};

getUserAddress(user1); // Svobody
//getUserAddress(user2); ----- Uncaught TypeError: Cannot read properties of undefined (reading 'street')
// для того, щоб не допускати помилку потрібно зробити перевірку чи є у об'єкта ключ address
getUserAddress(user2); // undefined
