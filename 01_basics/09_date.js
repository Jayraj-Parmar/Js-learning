// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
let d = new Date();

console.log(`d: ${d}`);
console.log(`Type of Date : ${typeof d}`);

console.log("Static method of Date");
let nowDate = Date.now(); //from January 1, 1970, to now in milisecondes
console.log(`from January 1, 1970, to now in milisecondes :${nowDate}`);
console.log(`parse : ${Date.parse("04 Dec 1995")}`);
const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
console.log(`toUTCString:${utcDate1.toUTCString()}`);

console.log("Instance method of Date");
console.log(`toString : ${d.toString()}`);
console.log(`toDateString : ${d.toDateString()}`);
console.log(`toISOString : ${d.toISOString()}`);
console.log(`toJSON : ${d.toJSON()}`);
console.log(`toLocaleString : ${d.toLocaleString()}`);
console.log(`toLocaleDateString : ${d.toLocaleDateString()}`);
console.log(`toTimeString : ${d.toTimeString()}`);
console.log(`toLocaleTimeString : ${d.toLocaleTimeString()}`);
// let myDate = new Date(2005, 6, 22); //month start from 0.
let myDate = new Date(2005, 6, 22, 7, 20, 30, 1);
// let myDate = new Date("2005-07-22");
// let myDate = new Date("07-22-2005");
console.log(`myDate : ${myDate.toLocaleString()}`);
console.log(
  `from January 1, 1970, to July 22,2005 in milisecondes: ${myDate.getTime()}`,
); //from January 1, 1970, to July 22,2005 in milisecondes
console.log(`Day: ${myDate.getDay()}`);
console.log(`Date: ${myDate.getDate()}`);
console.log(`Month: ${myDate.getMonth() + 1}`);
console.log(`Year: ${myDate.getFullYear()}`);
console.log(`Hours: ${myDate.getHours()}`);
console.log(`Minutes: ${myDate.getMinutes()}`);
console.log(`Seconds: ${myDate.getSeconds()}`);
console.log(`Milliseconds: ${myDate.getMilliseconds()}`);

console.log(
  d.toLocaleString("default", {
    weekday: "long",
  }),
);
//more properties in toLocalString()

console.log(`setDate:${myDate.toDateString()}`);
myDate.setDate(24);
console.log(`setDate:${myDate.toDateString()}`);
