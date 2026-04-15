//for each
let fruits=["apple"," banana", " orange"," grape"," mango."];
let names=["izeeq", " chidimma"," benita"," nora"," joy"," esther."]
names.forEach(function(names){
    console.log("MY_FAMILY_MEMBERS "+names)    //named function
})
fruits.forEach(function(fruits){
    console.log("I LIKE EATING "+fruits)      // named function
})

//map methods
let scores=["60"," 70", "75", "55", "30"]
let newScores=scores.map(x=>{      //arrow method
//console.log("as a good teacher, i decided to add 5 marks to all my students")
return x + 5
})
console.log(newScores)
let students=["izeeq", "chidi", "bisola", "john"]
let nameTag=students.map(tag=>{
    return"TECHCRUSH COHORT6"+tag
})
console.log(nameTag)

// filter method
let jambScores=[145,230,190,300,100,230,269]
let passed=jambScores.filter(score=>{
    return score>=200
})
console.log(passed)

let ages= [18,19,16,24,91,3,45,17]
let adults=ages.filter(age=>{
    return age>=18
})
console.log(adults)

//.find
const studentNames=["John", "Ada", "Doe", "Smith", "Bola", "John"]
const found=studentNames.find(dName=>{
    return dName==="John"
})
console.log(found)

//reuduce
let cartPrice=[1500,800,2200,450,1000,"t"]
let total=cartPrice.reduce((acc,price)=>{
    return acc+price                          //accumulator, currentValue, InitialValue
},0)
console.log(total)

//.push .pop .shift .unshift    used to add and remove elements from the back and front of a given array 
let colours=["red", "blue", "green"]
colours.push("yellow")

console.log(colours)

colours.pop()
colours.pop()
console.log(colours)

colours.shift()
console.log(colours)

colours.unshift("Pink","brown")
console.log(colours)
