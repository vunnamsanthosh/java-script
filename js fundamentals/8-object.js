const person = {
    // Name - value pairs
    firstName: "Jagan",
    lastName: "Javid",
    age: 25,
    email: 'javid@gmail.com',
    hobbies: ['Music', 'Sports'],
    address: {
        city: "Chennai",
        state: "TN"
    },
    getFullName: function(){
      return this.firstName + ' ' + this.lastName;
    }
}

let val;

val = person;

// Get Specific value

val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies[0];
val = person.address;
val = person.address.city;
val = person.address["state"];
val = person.getFullName();

// console.log(val);

const people = [
    {name: 'John', age: 26},
    {name: 'Jagan', age: 27},
    {name: 'Arun', age: 30},
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name)
}