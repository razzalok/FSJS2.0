// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const d = new Date();
d.getFullYear();
console.log(d.getFullYear());

console.log(d.getMonth());
console.log(d.getUTCDate());
console.log(d.getUTCDay());
console.log(d.getHours());
console.log(d.getUTCMinutes());

var preDay = new Date(1970, 01, 01);
console.log((d-preDay));