let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("Проміс виконався успішно");
    } else {
      reject(new Error("Проміс не виконано"));
    }
  }, 1000);
});

promise
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Проміс відпрацював"));

//

let eatFood = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Я прийшов на кухню");
  }, 2000);
});

eatFood
  .then((walk) => {
    console.log(walk); // Я прийшов на кухню
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(walk + ", відкрив холодльник");
      }, 2000);
    }).then((open) => {
      console.log(open); // Я прийшов на кухню, відкрив холодльник
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(open + ", дістав їжу та з'їв її.");
        }, 2000);
      }).then((result) => {
        console.log(result); // Я прийшов на кухню, відкрив холодльник, дістав їжу та з'їв її.
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(result + " Потім помив посуд.");
          }, 2000);
        }).then((final) => {
          console.log(final); // Я прийшов на кухню, відкрив холодльник, дістав їжу та з'їв її. Потім помив посуд
        });
      });
    });
  })
  .finally(() => {
    console.log("Солодко спати, коли наївся)))");
  });

//----------------------------------

function load(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Err ${script}`));

    document.head.append(script);
  });
}

let prom = load(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

prom.then((script) => console.log(`Download ${script}`));

prom.catch((error) => console.log(`Error ${error.message}`));

prom.finally(console.log("Finally"));

//         Статичні методи промісів

const getPomise = (time, isResolve = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isResolve) {
        resolve(time);
      } else {
        reject(new Error("Помилка"));
      }
    }, time);
  });
};

/* Метод коли треба виконати всі проміси паралельно, а не ланцюжково.
 При ланцюжковому виконанні проміси виконуються один за одним*/
/* Якщо в будь-якому промісі ми попадаємо хоча б в один "catch", то видасть помилку і
  жоден з вказаних промісів в цьому методі виконуватись не буде */
Promise.all([getPomise(1000), getPomise(2000, false), getPomise(3000)])
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });

/* Якщо в будь-якому промісі ми попадаємо в "catch", то інші проміси
в цьому методі будуть виконуватись */
Promise.allSettled([getPomise(1000, false), getPomise(2000), getPomise(3000)])
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });

/* Повертає перший виконаний проміс, не зважаючи на те, що виконався він  з помилкою чи без неї */
Promise.race([getPomise(1000, false), getPomise(2000), getPomise(3000)])
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });

/* Повертає перший виконаний проміс, який виконався без помилки */
Promise.any([getPomise(1000, false), getPomise(2000), getPomise(3000)])
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });

//        Async, await

const getNumber = (number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, 1500);
  });
};

const printNumber = async (number) => {
  let result = await getNumber(number);
  return result;
  //   return new Promise((resolve) => {
  //     getNumber(number).then((result) => {
  //       resolve(result);
  //     });
  //   });
};

printNumber(250).then((data) => {
  console.log(data);
});
