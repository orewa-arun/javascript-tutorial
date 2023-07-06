
// will grab first p tag
const para = document.querySelector("p");

para.innerText = "anyaa kakoiii"

// className using a css selector ,even this selects inside error
const perror = document.querySelector("div.error");

// console.log(perror);

const paras = document.querySelectorAll("p");

// innerText gets the text inside the tag!
paras.forEach((p)=>{
    console.log(p.innerText);
})

const content = document.querySelector("div.content");

content.innerHTML = "<h1>This is big!</h1>"

const link = document.querySelector("a");

link.setAttribute("href","https://spyxfamily.com");
link.innerText = "anya fans click here!";

// you can add attributes too , and the attributes
// of an element override the css attached to the class
// this will override the css of the class too
link.setAttribute("style","color:blue;");

console.log(link.getAttribute("href"));

// for styles you can use style property
console.log(link.style);
console.log(link.style.color);

link.style.margin = "25px";
link.style.padding = "30px";
link.style.fontSize = "30px";

// how to remove style element?
link.style.margin = "";


// how to add class Name
// note : class="error hello" means two class names error and hello
// this is significant because a style with .error will be applied to that 
// element here it is that <a></a>
link.classList.add("success");