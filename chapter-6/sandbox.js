const age = '20';

console.log(age + 1);
console.log(typeof age , typeof Number(age));
console.log(Number(age) + 1);

const height = 181;

// explicit type conversion
console.log(typeof String(height));
console.log(String(height) + "m");

// implict type conversion from number to string 
console.log(height + "m");

// Note that "0" has positive ASCII value
console.log(Boolean("0")); // true
console.log(Boolean(0));   // false