//.length of a string
let stringText="this is a class on string methods"
console.log(stringText .length)

//.touppercase .tolowercase
let capitalLetter=stringText.toUpperCase()
let smallerLetter=stringText.toLowerCase()
console.log(capitalLetter)
console.log(smallerLetter)

//.trim .trimstart .trimend
let str="   Hello, world   "
let trimmedstr=str.trim()
let fronttrimmedstr=str.trimStart()
let endtrimmedstr=str.trimEnd()
console.log(trimmedstr)
console.log(fronttrimmedstr)
console.log(endtrimmedstr)

let signUpname=" Izeeq"
let signInname="Izeeq"

if((signUpname.trim())===signInname){
    console.log("Welcome Back Izeeq")
}else{
    console.log("invalid details")
}

//.indexof .includes
let userEmail="isaacemeka@gmail.com"
let emailIndex=userEmail.indexOf("@") //return datatype: number
console.log(emailIndex)
console.log(userEmail.indexOf("r"))

console.log(userEmail.includes("boy")) //return datatype: boolean

//.startwith .endswith
let userName="techCrush Izeeq 6"
console.log(userName.startsWith("techy")) // return datatype: boolean
console.log(userName.endsWith("6"))  // return datatype: boolean

//.slice .substring
let testString= "my name is izeeq"
let slicedString= testString.slice(0,8)
let substring=testString.substring(0,8) //return datatype: string
console.log(slicedString)
console.log(substring)

//.replace .replaceAll
let text="isaac is a techie, isaac loves coding, isaac teaches coding"
console.log(text.replace("isaac","he"))
let replacedAlltext=text.replaceAll("isaac", "he")
console.log(replacedAlltext)

//.split
const sentence="LANGUAGES: javascript, c++, java, python"
let splittedSentence=sentence.split(",")    // return datatype: array
console.log(splittedSentence)
