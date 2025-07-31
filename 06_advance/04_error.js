// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
// Types of Error
// 1. Syntax Error
// 2. Reffrence Error
// 3. Range Error
// 4. Type Error

// SyntaxError
// const a;
// a = "jayraj"

// const a = "jayraj";
// const a = "parmar";
// for (let index = 0; index < 10; index+) {
//     console.log(index)
// }

// const and let are in Temporal dead Zone
//let and const are block scoped variables
// ReferenceError
// console.log(b); //Temporal dead zone
// let b = "jayraj";

// RangeError
let a = 101.5;
// console.log(BigInt(a));

// TypeError
let b = null; //or undefined
// console.log(BigInt(b));

// Handle using try{}catch(){}finally{}
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("The argument must be between -500 and 500.");
  }
}
try {
  check(2000);
} catch (error) {
  if (error) {
    console.log(error);
  }
} finally {
  console.log("Finally");
}
