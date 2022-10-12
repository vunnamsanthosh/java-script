// For Loops

// Loops can execute a block of code a number of times

// JavaScript Loops
// Loops are handy, if you want to run the same code over and over again, each time with a diffrent value


// Statement 1 is a excuted (one time) before the execution of the code block

// Statement 2 defines the conditions for the executing the code block

// Statement 3 is excuted (every time) after code block has been executed

for(let i = 0; i <= 10; i++){
    if(i === 2){
      // console.log("2 is my fav number");
      continue;
    }
  
    if(i === 5){
      // console.log(`Stop the loop ${i}`)
      break;
    }
  
    // console.log("Number " + i);
  }
  
  // While loops
  
  
  // let i = 0;
  
  // while( i < 10){
  //   console.log("While Number " + i);
  //   i++;
  // }
  
  
  // DO WHILE
  
  
  // let i = 0;
  
  // do {
  //   console.log("Do While Number " + i);
  //   i++;
  // }
  // while(i<10)
  
  // Loop through array
  
  const cars = ['Ford', 'Honda', "BMW"];
  
  // for(let i = 0; i < cars.length; i++){
  //   console.log(cars[i])
  // }
  
  // FOREACH
  
  // The foreach() methods calls a function for each element in an array
  
  cars.forEach(function(car, index, arr){
    // console.log(`${index} - ${car}`);
  })
  
  
  
  // MAP() creates a new array from calling a function for every array element.
  // The map() methods calls a function for each element in an array
  
  const users = [
    {
      id: 1,
      name: "Javid"
    },
    {
      id: 2,
      name: "Sara"
    },
    {
      id: 3,
      name: "Steve"
    },
    {
      id: 4,
      name: "Jagan"
    },
  ]
  
  const ids = users.map(function(user){
    return user.id;
  })
  
  // console.log(ids);
  
  const user = {
    firstName: "Jagan",
    lastName: "Javid",
    age: 25
  }
  
  // for(let objName in user){
  //   console.log(`${objName} : ${user[objName]}`)
  // }
  
  // At last the scope
  // Global Level Scope
  // var i = 5;
  // console.log("test",i);
  
  // for(var i = 0; i< 10; i++){
  //   console.log(i);
  // }
  
  // console.log("test",i);
  
  
  let i = 5;
  console.log("let test", i);
  
  // Block level scopes
  
  for(let i = 0; i< 10; i++){
    console.log(i);
  }
  
  
  console.log("let test", i);
  
  
  
  // In the first ex, using var, the var declared in the loop redeclares the var outside of the loop
  
  // in the 2nd ex , using let , the var declared in the loop does not redeclare the var outside of the loop
  
  // when let is used to declare the i var in a loop, the i var will only be visible within the loop
  
  