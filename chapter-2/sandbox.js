let email = "arunworkacc0@gmail.com";

let firstName = "Arunkumar";
let secondName = "M";

let fullName = firstName + " " + secondName;
let initial = fullName[length-1];

console.log(fullName);
console.log(fullName.length);

console.log(fullName.toUpperCase());
// note that the above methods don't modify original variable
console.log(fullName);

//Calculate the index of a character
let indexOfAt = email.indexOf("@");
console.log(indexOfAt);

// In case of multiple chars ,it displays the first instance
let indexOfA = email.indexOf("a");
console.log(indexOfA)

// Slicing the email before the @
let userName = email.slice(0,indexOfAt);
console.log(userName);

// Num data types
const pi = 22/7;
const front_pi = (22 - 22%7)/7;
const rear_pi = 22/7 - front_pi;

console.log(pi);
console.log(front_pi,rear_pi);

// order of operations : B I D M A S
let result = 2 * (3-1)**2;
result++;

console.log(result);

// concatenate strings
let recip = "Arun";
let msg = "wassup?";


let sal = "hello " + recip + ", " + msg;
console.log(sal);

// Creating a template string, 
// you can even create a html template inside this ``
sal = `hello ${recip} , just wanna tell ya ${msg}`;
console.log(sal);