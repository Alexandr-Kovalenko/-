function printName(text1, text2) {
  console.log(text1 + this.firstName + text2);
}

printName(); // Nan

const user = {
  firstName: "Alex",
};

// call
printName.call(user, "Hello ", ". How do you do?"); // Hello Alex. How do you do?

// apply
printName.apply(user, ["Hello ", ". How do you do?"]); // Hello Alex. How do you do?
// "call" та "apply" відрізняються тим, що в "call" можєна передавати багато параметрів, а в "apply" масив

// bind
let write = printName.bind(user, "Hello ");

console.log("Some text");
write(". How do you do?"); // Hello Alex. How do you do?
write(". How old are you?"); // Hello Alex. How old are you?
write(". Where do you live?"); // Hello Alex. Where do you live?

function mul(a, b) {
  console.log(a * b);
}

let double = mul.bind(null, 2); // null - об'єкт, якого немає, 2 - параметр "a"
// передаємо параметр "b" при виклику
double(2); // 4
double(3); // 6
double(4); // 8

let triple = mul.bind(null, 3);

triple(2); // 6
triple(3); // 9
triple(4); // 12
