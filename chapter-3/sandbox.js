// arrays 

const ArraysCanBeAnything = [3,5,"hi","sup?",true];
console.log(ArraysCanBeAnything)

let persona = ["ego","altr","intro"];
persona  = persona.concat(["extro"]);
persona[1] = "alter";

let index = persona.indexOf("alter");
persona.push(["egoism,altuism,asceticism"]);
persona.pop()

console.log(persona,index);