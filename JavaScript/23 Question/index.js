// 23. Write a program to check that the number given by the user is a prime number or not.

const num = 79;
function checkPrime(){
    for( var x =2; x< num;x++){
        if(num%x==0){
            console.log(`${num} is not Prime Number`);
            return;
        }
    }
    console.log(`${num} is Prime Number`);
}
checkPrime();