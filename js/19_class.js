class MyClass {
  constructor(name) {
    this.name = name;
  }

  method1() {
    console.log("Hello");
  }

  get printName() {
    return this.name;
  }
}

let user1 = new MyClass("Vitaliy");

console.log(user1); // MyClass {name: 'Vitaliy'}
user1.method1(); // Hello
console.log(typeof user1); // object
console.log(typeof MyClass); // function
console.log(user1.printName); // Vitaliy

/* Щоб новому класу успадкувати властивості іншого потрібно записати такий вираз:
 class NewClass extends OldClass {
 за потреби тут можна додати вл-ті та методи нового класу
 }
 Якщо вл-ті або методи нового та старого класів ідентичні по назві, то пріоритетними будуть нові
 Якщо ми хочемо успадкувати метод чи вл-ть старого класу, то перед ним ставимо приставку "super"
*/

class Animal {
  static printName = "Це клас для створення тварини";
  static method() {
    console.log("Це код метода класа");
  }

  constructor(name) {
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} біжить зі швидкістю ${this.speed} км/год`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} зупинився`);
  }
}

let rabbit = new Animal("Rabbit");

console.log(rabbit); // Animal {name: 'Rabbit'}
console.log(rabbit.name); // Rabbit
rabbit.run(25); // Rabbit біжить зі швидкістю 25 км/год
rabbit.stop(); // Rabbit зупинився

class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  whatAge() {
    console.log(`${this.name} ${this.age} років`);
  }

  hide() {
    console.log(`${this.name} сховався`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

let dog = new Dog("dog", 5);

console.log(dog); // Dog {name: 'dog', age: 5}
console.log(dog.name); // dog
console.log(dog.age); // 5
dog.run(40); // dog біжить зі швидкістю 40 км/год
dog.stop(); // dog зупинився   dog сховався

// console.log(rabbit.printName); // undefined            !!!!!!!!!!!
// rabbit.method(); // rabbit.method is not a function    !!!!!!!!!!!
/* методи та вл-ті помічені як "static" не успадковуються при створенні об'єкту на основі класу,
але успадковуютья якщо створюємо новий клас на основі існуючого */
console.log(Animal.printName); // Це клас для створення тварини
Animal.method(); // Це код метода класа
console.log(Dog.printName); // Це клас для створення тварини
Dog.method(); // Це код метода класа

class CoffeeMachine {
  _waterAmount = 0; // "_" - знак захищеної змінної, яка має працювати тільки "під капотом"
  #cupAmount = 0; // "#" - знак захищеної змінної, яка має працювати тільки "під капотом"

  constructor(power) {
    this.power = power;
  }

  set addWater(value) {
    this._waterAmount += value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  set addCup(value) {
    this.#cupAmount += value;
  }

  get cupAmmount() {
    return this.#cupAmount;
  }

  createCofee() {
    if (this._waterAmount >= 200 && this.#cupAmount > 0) {
      this._waterAmount -= 200;
      this.#cupAmount--;
      console.log("Ваша кава готова");
    } else {
      if (this._waterAmount < 200 && this.#cupAmount < 1) {
        console.log(
          `Вибачте, але в автоматі недостаньо води для приготування кави та закінчились стаканчики`
        );
      } else {
        if (this._waterAmount < 200) {
          console.log(
            `Вибачте, але в автоматі недостаньо води для приготування кави`
          );
        }
        if (this.#cupAmount < 1) {
          console.log(`Вибачте, але в автоматі закінчились стаканчики`);
        }
      }
    }
  }
}

const coffeeMachine = new CoffeeMachine(100);

console.log(coffeeMachine); // CoffeeMachine {_waterAmount: 0, power: 100}
console.log(coffeeMachine.waterAmount); // 0
console.log(coffeeMachine._waterAmount); // 0
/* з точки зору синтаксису так можна використати захищену зміннузі знаком "_", але це вважається поганим тоном,
а от в наступному варіанті зі знаком "#" цього вже зробити не вдасться і це викличе помилку */
// console.log(coffeeMachine.#cupAmount);

coffeeMachine.addWater = 400;
coffeeMachine.addCup = 2;
console.log(coffeeMachine.waterAmount); // 500
console.log(coffeeMachine.cupAmmount); // 2

coffeeMachine.createCofee(); // Ваша кава готова
coffeeMachine.createCofee(); // Ваша кава готова
coffeeMachine.createCofee(); // Вибачте, але в автоматі недостаньо води для приготування кави та закінчились стаканчики

// перевірка на те, чи являється змінна похідною від класу
console.log(coffeeMachine instanceof CoffeeMachine); // true
