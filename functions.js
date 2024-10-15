// give a name to a step (table of contents)
//no parameters - for organization
function begin() {
    console.log("IN THE BEGINNING...")
}
function middle(){
    console.log("INTO THE HEART OF CODING")
}
function end(){
    console.log("WRAPPING IT UP.")
}
//invoke or call
begin()
middle()
end()

///////////////////////////////////////
function greet(who, age){
    console.log(`Hey ${who}!!!`);
    if(age >= 28){
        console.log("Your knees hurt");
    }else{
        console.log("a Lot of time")
    }

}
greet("Kay", 29)
greet("Class", 25)

console.log(new Date());