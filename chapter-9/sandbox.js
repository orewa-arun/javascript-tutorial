const slayers = ["tanjiro","zenitsu","inosuke"];
speak("tanjiro","morning");

// function declaration can be function hoisted
function speak(name,time){
    console.log(`hi ${name}, good ${time}`);
}

// function expression can't be flag hoisted
const salutation = function(name,time="night"){ // night is default time
    console.log(`hi ${name}, good ${time}`);
};

salutation("zenitsu");

// function returns values that can be stored
// in memory out of function scope
const calcArea = function(radius){
    const area = 3.14* radius**2;
    return area;
};

let circleArea = calcArea(4);
console.log(circleArea);

// arrow functions
const calcVolume = (radius,width) => calcArea(radius) * width;

console.log(calcVolume(4,10));

// callback functions

const myFunc = (fallbackFunc) => {
    fallbackFunc(10);
};

myFunc(function(radius){
    console.log(3.14* radius**2);
});

// forEach takes a fallback function as an argument
// and in forEach function the fallback has worked
// name,index,array params
const slayerInfo = (name,index,Array)=>{
    console.log(`${name} is in ${index}th position in array ${Array}`);
};

// externalising callback func 
slayers.forEach(slayerInfo);

// how to do some brower stuff you ask?
const ul = document.querySelector(".slayerList");

let html = ``;

slayers.forEach((name) => {
    html += `<li>${name}</li>`;
})

console.log(html);
ul.innerHTML = html;