const date5 = new Date();
console.log(date5); // Thu Mar 28 2024 13:27:19 GMT+0200 (Восточная Европа, стандартное время)

const date1 = new Date(0);
console.log(date1); // Thu Jan 01 1970 03:00:00 GMT+0300 (Восточная Европа, стандартное время)

const date2 = new Date(24 * 60 * 60 * 1000); // 24 години 60 хв. 60 с. 1000 мс
console.log(date2); // Fri Jan 02 1970 03:00:00 GMT+0300 (Восточная Европа, стандартное время)

const date3 = new Date();
const milisaconds1 = date3.getTime();
console.log(milisaconds1); // 1711625724191 мс. пройшло з 1 січня 1970 року

const newDate = new Date(milisaconds1); // --- визначити дату по мс. від з 1 січня 1970 року
console.log(newDate); // Thu Mar 28 2024 13:39:29 GMT+0200 (Восточная Европа, стандартное время)

const date4 = new Date(
  2012,
  3,
  25,
  12,
  36,
  52,
  984
); /* 2012 рік !!!4!!! місяць 25 день
 12 година 36 хвилин 52 секунди 984 мілісекунди */
console.log(date4); // Wed Apr 25 2012 12:36:52 GMT+0300 (Восточная Европа, летнее время)

const fullYear = date4.getFullYear(); // --- визначити рік по заданій даті
console.log(fullYear); // 2012

const month = date4.getMonth(); // --- визначити місяць по заданій даті (відлік з 0) !!!!!!!!!
console.log(month); // 3

const date = date4.getDate(); // --- визначити дату по заданій даті
console.log(date); // 25

const hours = date4.getHours(); // --- визначити годину по заданій даті
console.log(hours); // 12

const minutes = date4.getMinutes(); // --- визначити хвилину по заданій даті
console.log(minutes); // 36

const seconds = date4.getSeconds(); // --- визначити секунду по заданій даті
console.log(); // 52

const milisaconds = date4.getMilliseconds(); // --- визначити мілісекунду по заданій даті
console.log(milisaconds); // 984

const day = date4.getDay(); // --- визначити день неділі по заданій даті (відлік з 0) !!!!!!!!!
console.log(day); // 3

const time = date4.getTime(); // --- визначити скільки пройшло мілісекунд з 01,01,1970 до заданої дати
console.log(time); // 1335346612984

const timeZoneOffset =
  date4.getTimezoneOffset(); /* --- визначити часовий пояс по заданій даті.
  Якщо -180, то це означає +3 GMT, якщо -320, то +5 GMT */
console.log(timeZoneOffset); // -180

const ourDate = "2022-01-01T20:20:20.500";

const parseDate = Date.parse(ourDate);
console.log(parseDate); // 1641061220500

const correctDate = new Date(parseDate);
console.log(correctDate); // Sat Jan 01 2022 20:20:20 GMT+0200 (Восточная Европа, стандартное время)
