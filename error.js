//syntax error
//let add =(5+3
//console.log(add)

//reference error
//console.log(x)


//type error
//let num=5
//console.log(Num.toUppercase())

try{
    //code that will fail goes here
    let result=10/0;
    console.log(result);
    undefinedFunction(); //this will cause an error becaue this is an undefined function
    console.log("this line will not run.");
}catch(error){
    //this only runs if something goes wrong
    console.log("An Error Occured: " +error.message);
}
console.log("The Program continues here.");

try{
    let age=25
    console.log(age.length())
} catch(error){
    console.log("An errror occured: "+error.message);
} 

//finally
function loadUserData(userId){
    console.log("starting to load data. . . ");
    try{
        if (userId.startswith("BAD")){
            throw new Error("user Id must start with BAD");
        }
        console.log("Data loaded for user: " +userId);
    } catch(error){
        console.log ("Failed: "+error.message);
    } finally {
        console.log("Loading complete. Closing connection.");   //always runs
    }
}