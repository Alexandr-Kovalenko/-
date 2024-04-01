const printHello = () => {
  console.log("Hello");
};

setTimeout(printHello, 2000); //1 - назва функції, яка має виконатись, 2 - час в мс, через який буде виконватись функція

// якщо потрібно передати параметри функції
const sum = (a, b) => {
  let sum = a + b;
  console.log(sum);
};

const writeSum = setTimeout(sum, 4000, 5, 85); // 3 - параметр "a", 4 - параметр "b"
clearTimeout(writeSum); // якщо потрібно прибрати setTimeout

const writeHello = setInterval(printHello, 1000);
clearInterval(writeHello);
