// 04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

const info = "React is library of java Script";

// console.log(info.includes("Script"));
const isPresent = info.includes("Script")

if(isPresent){
    console.log(`Script word is present in ${info}`);
}
else{
    console.log(`Script word is not present in ${info}`);
}