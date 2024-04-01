/* Досить часто виникають такі ситуації, коли ми маємо "важку" та ресурсозатратну функцію,
в яку ми передаємо якісь параметри. Щоб повторно не запускати цю функцію при передачі параметрів, 
які вже запускались, доцільно буде використовувати нат званий "кеш". */

let printValue = (x) => {
  // тут щось важке та ресурсно затратне
  return x * 2;
};

const cachingDecorator = (func) => {
  let cache = new Map();

  return function (y) {
    if (cache.has(y)) {
      console.log("Ми отримали результат з кешу");
      return cache.get(y);
    }

    let result = func(y);
    cache.set(y, result);
    console.log("Ми отримали результат не з кешу");

    return result;
  };
};

printValue = cachingDecorator(printValue);

console.log(printValue(21)); // 42 'Ми отримали результат не з кешу'
console.log(printValue(21)); // 42 'Ми отримали результат з кешу'
console.log(printValue(21)); // 42 'Ми отримали результат з кешу'
