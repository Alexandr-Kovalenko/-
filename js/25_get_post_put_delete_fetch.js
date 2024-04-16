//           Запити на сервер

// GET --- отримання інформації
// POST --- створення нової сутності
// PUT --- редагування сутності
// DELETE --- видалення сутності

const API_URL = "https://jsonplaceholder.typicode.com";

let promise = fetch(API_URL + "/posts", {
    headers: {
        "Content-type": "aplication/json; charset=UTF-8",
    },
    method: "POST",
    body: JSON.stringify({title: "TITLE", body: "BODY"}),
});
promise.then((data) => {
    console.log(data);
    return data.json()
}).then(result => console.log(result));