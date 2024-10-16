eilish = "billie"

function classRoom(){//start block
    //inner scope
    let firstName = "K" //block scope - created here and exists only here
    console.log(firstName + "is a nerd")
    console.log(firstName + "likes to listen to" + eilish)
}
console.log(eilish + "has cool beats")

classRoom();

console.log(firstName + "is a student")

//global
//local
//function/block scope (nesting)

