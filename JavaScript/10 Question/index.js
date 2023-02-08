// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3 true
//     - 4 >= 3 true
//     - 4 < 3 false
//     - 4 <= 3 false
//     - 4 == 4 true
//     - 4 === 4 true
//     - 4 != 4 false
//     - 4 !== 4 false
//     - 4 != '4' false
//     - 4 == '4' true
//     - 4 === '4' false
//     - Find the length of python and jargon and make a falsy comparison statement.

console.log(4 > 3);
if(4 > 3){
    console.log('It is true statement');
}
console.log(4 >= 3);
if(4 >= 3){
    console.log('Yes it is true statement');
}
console.log(4 < 3);
if(4 < 3){
    console.log(`Yes 4 is less than 3`);
}
console.log(4 <= 3);
if(4 <= 3){
    console.log(`No this statement is wrong`);
}
console.log(4 == 4);
if(4 == 4){
    console.log("Yes 4 is equal to 4");
}
console.log(4 === 4);
if(4 === 4){
    console.log(`Yes 4 is equal to 4`);
}

console.log(4 != 4);
if(4 != 4){
    console.log(`No 4 is equal is 4`);
}
console.log(4 !== 4);
if(4 !== 4){
    console.log(`No 4 is equal to 4`);
}
console.log(4 != '4');
if(4 != '4'){
    console.log(`No 4 is equal to 4`);
}
console.log(4 == '4');
if(4 == '4'){
    console.log(`Yes 4 is equal to 4`);
}
console.log(4 === '4');
if(4 === '4'){
    console.log(`No 4 is not stritly equal 4`);
}


// python and jargon
const languageName = "python";
const secondLanguageName = "jargon";
console.log(languageName.length);
console.log(secondLanguageName.length);
console.log(languageName.length != secondLanguageName.length);