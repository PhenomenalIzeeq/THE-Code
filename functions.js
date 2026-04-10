//function functionname(){
   // code to be executed
//}
//without parameter

function greet(){
    console.log("WELCOME BACK, IZEEQ")
}

//Call functions after declaring them if not it wont display

greet()

//with parameters

function farewell(name){
    console.log("see you again"+name)
}

farewell("Izeeq")


//static function
function add(){
    let a=5
    let b=3
    return a+b
}
console.log(add())

//dynamic functions
function addition(a,b){
    return a+b
}
console.log(addition(5,3))
console.log(addition(10,20))


function isAdult(age){
    return age>=18
}
console.log(isAdult(25))
console.log(isAdult(16))
