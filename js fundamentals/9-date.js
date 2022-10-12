let val;

const today = new Date();
// let birthday = new Date('05-09-1997 11:25:00');
// birthday = new Date('May 09 1997');
birthday = new Date('05/09/1997');

// console.log(birthday);

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();

val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

// console.log(val);
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1996);
birthday.setHours(3)
birthday.setMinutes(40)
birthday.setSeconds(20)
console.log(birthday);






// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log();

// const d = new Date();
// let day = days[d.getDay()];

// console.log(day);