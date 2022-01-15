//Задача 3
/*
Перепишите код, заменив оператор `switch` на оператор `if..else`:

switch (val) {
case 'a':
console.log( 'a' );
break;

case 'b':
case 'c':
case 'd':
case 'e':
console.log( 'others' );
break;

default:
console.log( 'unknown' );
}
*/

var val = '';

if (val == 'a') {
  console.log( 'a' );
} else if (['b', 'c', 'd', 'e'].includes(val)) {
  console.log( 'others' );
} else {
  console.log( 'unknown' );
}
;
