// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
ages.sort();
console.log(ages);
console.log(`${ages[0]} ${ages[ages.length-1]}`);

// Find the median age(one middle item or two middle items divided by two)
const length=ages.length;
if(length%2==0){
    console.log(`Median is ${(ages[length/2])/2}`);
}else{
    console.log(`Median is ${((ages[length/2])+(ages[(length/2)+1]))/2}`);
}

// Find the average age(all items divided by number of items)

var sum = 0;
for(const i of ages){
    sum=sum+i;
}
console.log(`Avarage of ages: ${sum/length}`);

// Find the range of the ages(max minus min)
ages.sort();
console.log(`Range of Ages : ${ages[length-1]-ages[0]}`);


// Compare the value of (min - average) and (max - average), use abs() method

function abs(){
    if((ages[0]-(sum/length))>(ages[length-1]-(sum/length))){
        console.log("Min Avarage is greater");
    }else{
        console.log("Max Avarage is greater");
    }
    
}
abs();