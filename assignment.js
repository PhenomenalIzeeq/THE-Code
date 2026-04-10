//substring & string
const str= "Nigeria is awesome";
console.log(str.substring(0,7));
console.log(str.slice(11,19));
console.log(str.slice(8,10));

//split
const names="John, Jane, Doe";
const comma=names.split(",")
console.log(comma)
const joined=comma.join("-")
console.log(joined)

const path="/user/home/docs";
const slash=path.split("/")
console.log(slash)
console.log(slash[2])



//mix
const email="user@example.com";
const username=email.split("@")
console.log(username)
console.log(username[0])
console.log(email.endsWith(".com"))
console.log(email.replace("@","AT"))

const matricNumber="TECHCRUSH-IZEEQ-001"
const nameOnly=matricNumber.split("-")
console.log(nameOnly[1])

