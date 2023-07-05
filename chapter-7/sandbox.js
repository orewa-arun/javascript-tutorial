// for loop

for(let i = 0; i < 10; i++){
    console.log(`this is ${i}th loop`);
}

console.log("loop finished");

const players = ["billy","jimmy","chin","rhanzou"];

for(let i = 0; i<players.length ; i++){
    // example of how string templates can be used as html
    let html = `<div>${players[i]}</div>`;
    console.log(html);
}

// While loop

let i=0;
while(i<2){
    console.log(`in loop ${i}`);
    i++;
}

i=0
while(i<players.length){
    console.log(`player name is ${players[i%(players.length)]}`);
    i++;
}

// if and else statements
const email = "hello@hmail.com";
const password = "hello234789";

if (email.includes("@")) {

    if(password.length > 16){
        console.log("your password is mighty!");
    } else if(password.length > 8){
        console.log("your password is good enough");
    } else {
        console.log("your password is too weak");
    }
} else {
    console.log("you don't have valid credentials");
}

// operators
console.log(!false);
console.log(true || false);
console.log(true && false);


// break and continue statements

let scores = [20,30,0,34,28,14];

for (let i = 0; i < scores.length; i++){

    console.log(`in ${i}th loop`);
    if(scores[i] === 0) {
        // jumps to the next iteration without executing the below codes
        continue;
    }

    console.log("oh you have crossed continue!")
    if(scores[i] === 34) {
        console.log("sorry i'm brookee noww");
        break;
    }
    
    console.log("hey,if i disapper because of break,it's been nice seeing ya");
}

// switch statements

let grade = "A";

switch(grade){
    case "A" :
        console.log(grade);
        break;
    case "B" :
        console.log(grade);
        break;
    default :
        console.log(grade);
}

console.log(grade);