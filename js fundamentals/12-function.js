// Function Statement


// function greet(firstName, lastName){

    // if(typeof firstName === "undefined"){
    //     firstName = "Javid"
    // }
    // if(typeof lastName === "undefined"){
    //     lastName = "Jagan"
    // }

//     return "Hello" + ' ' + firstName + ' ' + lastName;
 
// }

// console.log(greet("Jagan", "Javid"));

// Function Expressions

// const square = function(x = 5){
//     return x * 10;
// }


// console.log(square());

// AN IIFE (Immediately Invoked Function Expression) is a javascript

// (function(){
//     console.log("IIFE Run")
// })();

// (function(name){
//     console.log("Hello " + name);
// })('Javid');

// Property Methods

// A javascript method is a property containing a function definition.
// Methods are functions stored as objects properties

const todo = {
    name: "Javid",
    add:function(){
        console.log("Add todo");
    },
    edit:function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log("Delete Todo");
}

todo.test = 5;


console.log(todo.test);

// console.log(todo.add());
// console.log(todo.edit(50));
// console.log(todo.delete());