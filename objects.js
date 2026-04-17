let obj={
    name: "Izeeq",
    age: 25,
    profession:"developer",
    complextion: "fair"
}
console.log(obj)

console.log(obj.name)
console.log(obj.profession)

const {name,age,profession}=obj
console.log(name)
console.log(age)
console.log(profession)

const{complextion:colour}=obj;
console.log(colour)

let updatedObj={
    ...obj,
    wealthLevel:"broke",
    zealToMakeIt:true

};
console.log(updatedObj)

const user={
    name: "Izeeq",
    password:"12345",
    isMale:"true",
    city:"Abuja",
    age:25
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

//for in
for(let key in user){
    console.log( "this is a key "+key) //for returning keys
    console.log("this is a value "+user[key]) //for returning values
}


