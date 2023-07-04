// browser console is a sandbox
// use let,const instead of var in new js

let age = 21;
let year = 2023;

console.log(age,year);

age = 30;

console.log(age);

const points = 200;
// points = 500; error

console.log(points);

// null is assigned to a variable of no value
let skills = null;

console.log(skills);
console.log(skills+3,skills*50);
console.log(skills+"hello");
console.log(skills && true);

skills = "coding";

console.log(skills);