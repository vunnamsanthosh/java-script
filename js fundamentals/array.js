// Create some Arrays

const numbers = [56,40,23,47,85,6,41,3]; //...
const number2 = new Array(22,33,44,66,77);
const fruit = ["Apple", "Banana", "orange", "Pear"];
const mixed = [22,"Hello", true, undefined, null, {a:1, b:1}, new Date(), function(){}];


let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get single value
val = numbers[1];

// Insert into array
numbers[2] = 100;

// Find the index of value
val = numbers.indexOf(200);

// MUTATING ARRAY
// Add on to array end
numbers.push(200);
// Take off from end
numbers.pop();
numbers.pop();
// Add on to front
numbers.unshift(100);
numbers.unshift(500);
// Take off from front
numbers.shift();
numbers.shift();
// Splice values
console.log(fruit);
// fruit.splice(1, 1 , "Goa");
// fruit.splice(1,1);
fruit.splice(3,1, "Mango","Goa");
console.log(fruit);