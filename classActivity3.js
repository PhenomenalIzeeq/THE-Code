// using the map method, create a new array where each number is doubled.
 const numbers=[1,2,3,4,5];
 let newArray=numbers.map(double=>{
    return double*2
 })
  console.log(newArray)

  //return scores greater than or equal to 300
  const scores=[250,300,350,200,400,180,160];
  let hiScores=scores.filter(hi=>{
   return hi>=300
  })
  console.log(hiScores)

  //get the sum of all the numbers in the array
  const sum=[2000,3000,400,100,600];
  let total=sum.reduce((acc, currentPrice)=>{
   return acc+currentPrice
  },0);
  console.log(total)

  //add green to the end of the array and remove red from the array
  const colours=["blue", "yellow", "red"];
  let newColours=colours.push("green")

console.log(newColours)
console.log(colours)

colours.pop()
console.log(colours)
colours.pop()
console.log(colours)
