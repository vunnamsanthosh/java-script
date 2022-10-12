// Type conversion (or typecasting) means transfer of data from one data type to another.

let val;

// Number to string

val = String(555);
val = String(5+5);

// Bool to String

val = String(true);

// Date to String

val = String(new Date());

// toString()
val = (5).toString();
val = (true).toString();


// String to Number

val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
// NAN --- Not an number
val = Number("Hello");
val = Number([1,2,3]);

val = 10;

console.log(val);
console.log(typeof val);
console.log(val.length);