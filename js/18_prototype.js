//             Прототипне наслідування для об'єктів (старий формат)

const animal = {
  eat: true,
};

const rabit = {
  jump: true,
};

const dog = {
  run: true,
};

rabit.__proto__ = animal;
dog.__proto__ = rabit;

console.log(rabit.eat); // true

console.log(dog.eat); // true
console.log(dog.jump); // true

//             Прототипне наслідування для об'єктів (новий формат)

const frog = Object.create(animal, {
  jump: {
    value: true,
  },
});

console.log(frog); // {jump: true}
console.log(frog.eat); // true

// дізнатись чи є у об'єкта прототип, та зеначення цього прототипу
console.log(Object.getPrototypeOf(frog)); // {eat: true}
console.log(Object.getPrototypeOf(dog)); // {jump: true} {eat: true}

// додати прототип в об'єкт
console.log(
  Object.setPrototypeOf(frog, {
    swim: true,
  })
); // jump: true   swim: true

//             Прототипне наслідування для конструкторів

function Rabbit(name, color) {
  this.name = name;
  this.color = color;
}

Rabbit.prototype = animal;

const rabbitJack = new Rabbit("Jack", "black");
const rabbitMickie = new Rabbit("Mickcie", "white");

console.log(rabbitJack); // Rabbit {name: 'Jack', color: 'black'}
console.log(rabbitJack.eat); // true
console.log(rabbitMickie); // Rabbit {name: 'Mickcie', color: 'white'}
console.log(rabbitMickie.eat); //true
