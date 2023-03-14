// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more


const weight=65.5
const heightInFeet=5.4
// 0.304 
var BMI = weight/((heightInFeet*0.304)*(heightInFeet*0.304));
console.log(BMI);
if(BMI>=0 && BMI<=18.5){
    console.log("You are Underweight");
}else if(BMI>=18.5 && BMI <= 24.9){
    console.log(`Your weight is Normal`);
}else if(BMI>=25 && BMI<=29.9){
    console.log(`You are Overweight`);
}else if(BMI >= 30){
    console.log(`You are Obese`);
}