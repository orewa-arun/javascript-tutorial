
let user = {
    name : "anya forger",
    age : 6,
    email : "anyaspy@spymail.com",
    location : "westalis",
    power : ["shapeshifting faces" , "mindreading" , "waku waku"],
    fav : function(){
        console.log("spy! koroshiya! .... waku waku!");
    },
    intro(){
        // this keyword is used to access the object within its scope.
        console.log(`${this.name}, anya has powers like`);

        // this keyword will refer to the closest object only
        // in normal function declaration not in arrow functions
        // in arrow functions it points to global object - window
        this.power.forEach((pow)=>{

            if( pow === "mindreading"){
                console.log("mind .... shhhhhh ...it's nothing");
            }else{
                console.log(`i can do ${pow}`);
            }
        })
    }
};

user.age = 7;
user.intro();
console.log(this);

// important example to understand primitive vs reference types
let scoreOne = 30;
const scoreTwo = scoreOne; //copies value not reference

scoreOne = 40;

console.log(scoreOne,scoreTwo);

const scores = [20,30,40];
const scoree = scores; // copies reference;

scores.pop();

console.log(scores,scoree);

// utilising function hoisting 
scoreChange(scoree);  // you pass the reference! , any change made in the function affects the real!
console.log(scores,scoree);

function scoreChange(arr){
    arr.pop();
    arr.push("anya fan");
}