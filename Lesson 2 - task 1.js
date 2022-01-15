//Задача 1
/*
Перепишите код, заменив оператор `if` на тернарный оператор `?`

var result;
if (a + b < 4) {
  result = true;
  } else {
    result = false;
    }
*/
var a = 1;
var b = 3;
var result = ((a + b < 4) ? true : false);

console.log(result);
