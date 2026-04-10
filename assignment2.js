//Q1
const numbers=[2,4,6,8,10];
numbers.forEach(x=>{
    console.log(x*2)
})

//Q2
const names=["Esther","John","Ada","Mike"];
names.forEach(y=>{
    console.log("Hello "+y+"!")
})

//Q3
const numbersQ3=[1,2,3,4,5];
let squaredNumbers=numbersQ3.map(z=>{
    return z*z
})
console.log(squaredNumbers)

//Q4
const prices=[100,200,300]
let discountedPrices=prices.map(a=>{
    return a*0.90
})
console.log(discountedPrices)

//Q5
const numbersQ5=[5,12,8,20,3];
let newSet=numbersQ5.filter(b=>{
    return b>10
})
console.log(newSet)

//Q6
const agesQ6=[15,22,17,30,18];
let adults=agesQ6.filter(c=>{
    return c>=18
})
console.log(adults)

//Q7(bonus)
const numbersQ7=[10,15,20,25,30];
let over20=numbersQ7.filter(d=>{
    return d>20
})
console.log(over20)
let theRest=numbersQ7.map(e=>{
    return e*2
})
console.log(theRest)