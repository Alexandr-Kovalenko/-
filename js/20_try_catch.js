/* Якщо ми допустили помилку в коді, то прогама, після того, як її видасть далі
виповнюватись не буде. Для виповнення програми далі ми можемо використати таку конструкцію */

console.log(1); // 1

try {
  console.log(2); // 2
  skjsdfgh;
  console.log(3); // 3 не виводиться, бо перед ним помилка і ми одразу перейшли в "catch"
} catch (error) {
  console.log(error.name); // ReferenceError
  console.log(error.message); // skjsdfgh is not defined
  console.log("error", error); // error ReferenceError: skjsdfgh is not defined
}

console.log(4); // 4
