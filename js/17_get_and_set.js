const user = {
  name: "Vitaliy",
  secondName: "Eremenko",
  age: 30,
  get fullName() {
    return `${this.name} ${this.secondName}`;
  },
  set fullName(value) {
    [this.name, this.secondName] = value;
  },
};

// get --- функція для зчитування
// set --- функція для установки, обов'язковао треба передавати параметри
// "get" і "set" можуть мати однакову назву, наприклад "fullName", але не обов'язково

console.log(user.fullName); // Vitaliy Eremenko

user.fullName = ["Oleksandr", "Kovalenko"]; //змінили "name" та "secondName" в об'єкті "user"

console.log(user.fullName); // Oleksandr Kovalenko
