/*
localStorage.setItem("key", 6); // записати в локальному сховищі ключ "key" зі значенням 3
localStorage.getItem("key"); // отримати з локального сховища значення ключа "key"
localStorage.removeItem("key"); // видалити з локального сховища ключ "key"
localStorage.clear(); // повністю очистити локальне сховище
localStorage.length; // показує кількість ключів записаних в локальному сховищі
*/

const countElement = document.getElementById("count");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");

let count = localStorage.getItem("count") || 0;
countElement.innerHTML = count;

minusBtn.addEventListener("click", () => {
    count--;
    localStorage.setItem("count", count);
    countElement.innerHTML = count;
});

plusBtn.addEventListener("click", () => {
    count++;
    localStorage.setItem("count", count);
    countElement.innerHTML = count;
});

localStorage.setItem("count", count);

// щоб передати в локальне сховище об'єкт чи масив потрібно скористатись JSON
let objToStr = JSON.stringify({name: "Alex", age: 35}); // переводимо в рядок
localStorage.setItem("user", objToStr);

let strToObj = JSON.parse(localStorage.getItem("user")); // переводимо в об'єкт
console.log(strToObj); // {name: 'Alex', age: 35}