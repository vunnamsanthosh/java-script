// if(something){
//     do something
// } else {
//     do something els
// }


let id = 100;

// Equal to VALUE

if(id == "100"){
    console.log("Correct")
} else {
    console.log("Incorrect")
}

// Not Equal to
// if(id != 101){
//     console.log("Correct")
// } else {
//     console.log("Incorrect")
// }


// Equal to VALUE AND TYPE

if(id === "100"){
    console.log("Correct")
} else {
    console.log("Incorrect")
}

// Not Equal to VALUE AND TYPE

if(id !== "101"){
    console.log("Correct")
} else {
    console.log("Incorrect")
}

// Test id undefined

if(typeof id !== "undefined"){
    console.log(`The ID is ${id}`);
} else {
    console.log(`no ID`);
}


// Greater or less than
if(id <= 100){
    console.log("Correct")
} else {
    console.log("Incorrect")
}


// if Else

const color = "blue";

if(color === 'red'){
    console.log("Color is red")
} else if (color === "blue"){
    console.log("Color is Blue")
} else {
    console.log('Color is not red or blue');
}


// LOGICAL OPERATORS

const name = "Jagan";
const age = 66;

// AND &&

if(age > 0 && age < 12){
    console.log(`${name} is a child`)
} else if( age >= 13 && age <= 19){
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult` )
}

// OR ||

if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR

console.log(id === 100 ? 'CORRECT' : 'Incorrect');

// WITHOUT BRACES

if(id === 101)
console.log("Correct")
else 
console.log("Incorrect")