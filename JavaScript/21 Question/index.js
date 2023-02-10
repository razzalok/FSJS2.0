// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countryName = ['India','SriLanka','U.S.A','Russia','China','Malesia','Dubai'];
function checkOrAdd(){
if(countryName.includes('Ethiopia')){
    console.log('ETHIOPIA');
}else{
    countryName.push('Ethiopia');
}
}
checkOrAdd();
console.log(countryName);
checkOrAdd();

