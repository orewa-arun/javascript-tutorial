let age;

// undefined simply means it has been declared
// but not assigned any value
console.log(age);

age = null;
console.log(age);

// bool examples
let email = "hello@hmail.com";
// returns true
console.log(email.includes("@"));

age = 21;
console.log(age == 21,age != 20 , age < 20);

let fruit = "apple";

// lexicographical order! so false
console.log( fruit > "banana" );

// lowercase is bigger than uppercase in js
console.log( fruit > "Apple");