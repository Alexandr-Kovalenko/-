//                 Замикання

let userName = "Pavlo";

const printName = () => {
  let userName = "Vitaliy";
  let userName2 = "Oleg";
  console.log(`Hello ${userName} & ${userName2}`);
};

printName(); // Hello Vitaliy & Oleg
// якщо прибрати з тіла функції "printName" змінну "userName", то отримаємо:
// Hello Pavlo & Oleg

const makeCounter = () => {
  let count = 0;

  return () => {
    return count++;
  };
};

const counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
