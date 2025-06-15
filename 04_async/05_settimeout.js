// https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
console.log("setTimeout() and setInterval() are Async function in JS.");
console.log("part 1");
// function setTime(time) {
//   console.log(`excute after ${time} sec`);
// }
// setTimeout(setTime, 5.5 * 1000, 5.5);

// setTimeout(() => {
//   console.log("excute after 3 sec");
// }, 3000);

// setTimeout(() => {
//   //It work but don't use like this, sometimes it not work.
//   console.log("excute after 1 sec");
// }, "1000");

// setTimeout(() => {
//   //It work but don't use like this, sometimes it not work.
//   console.log("excute after 1.5 sec");
// }, "1.5 * 1000"); //it treated like 0s

// setTimeout(() => {
//   console.log("No Delayed for 1 second.");
// }, "1 second");

// setTimeout(() => {
//   console.log("excute after first 1 sec");
// }, 1000);

console.log("part 2");
// function foo() {
//   console.log("foo has been called");
// }
// setTimeout(foo, 0);
// console.log("After setTimeout");

console.log("part 3");
// (function loop() {
//   setTimeout(() => {
//     console.log("after 1 second");
//     loop();
//   }, 1000);
// })();

console.log("part 4");
// console.log("Intresting but not undestand properly");
const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
  // console.log(this);
  // console.log(this[sProperty]);
};

// myArray.myMethod(); // prints "zero",one,two"
// myArray.myMethod(1); // prints "one"
// setTimeout(myArray.myMethod, 1.0 * 1000);
// setTimeout(myArray.myMethod, 1.0 * 1000, 1); //function ,undefined
// setTimeout(() => {
//   myArray.myMethod();
// }, 1.0 * 1000);
// setTimeout(() => {
//   myArray.myMethod(1);
// }, 1.0 * 1000);
