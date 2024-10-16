//ANONYMOUS FUNCTIONS 
//identifying label + a value 
//e.g. quantity = 123
//a block of code we can call one or more times;
//usually with a function name
//a function is a value, that may or may noy have an identifier(function name)

a = 123
b = a
c = b
console.log(c)

//traditional
function greet(firstName){
    return `howdy ${firstName}`;
}

console.log(greet("classmates"));

let greet2 = (firstName )=> `howdy ${firstName}`;

let hi = greet2;

console.log(hi("classmates"));

function bye(){
    console.log("Bye");
}
bye(); //invoke/call

//IIFE (immediately invoked function expression)
(()=> console.log("Goodbye"))();

function beCool(who, what){
   return what(who)
}
console.log(beCool("classmates", greet))
console.log(beCool("classmates", greet2))
console.log(beCool("classmates", hi))