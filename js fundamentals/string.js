const firstName = "Jagan";
const lastName = "Javid";
const age = 25;
const str = "Hello there my name is Jagan";
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Tom';
val += 'Son'

val = "Hello, My name is " + firstName + ' and I am ' + age;

// Length
val = firstName.length;

// concat()

val = firstName.concat(' ', lastName, " ", 'Buddy');

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf
val = firstName.indexOf("a"); // if true the cur index else -1
val = firstName.lastIndexOf("a");

// CharAT()
val = firstName.charAt('6');

// Get last char
val = firstName.charAt(firstName.length - 1);

// Slice()
val = firstName.slice(0, 1);

// split()
val = str.split(' ');
val = tags.split(',');

// replace
val = str.replace("Jagan", "Javid");

// includes()
val = str.includes("arun");

console.log(val);