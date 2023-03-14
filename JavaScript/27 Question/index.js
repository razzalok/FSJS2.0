// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).
for(var i=0;i<=100;i++){
    
    for( var x =2; x< i;x++){
        if(i%x==0){
            console.log(`${i} is not Prime Number`);
            return;
        }
    }
    console.log(`${i} is Prime Number`);
}