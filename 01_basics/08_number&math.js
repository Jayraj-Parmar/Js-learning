// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number
let num1 = 100;
console.log(typeof num1);

const num2 = new Number(100);
console.log(typeof num2);

console.log("Static properties of Number");
console.log(`MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER + 1}`);
console.log(`MIN_SAFE_INTEGER: ${Number.MIN_SAFE_INTEGER - 1}`);
console.log(`MAX_VALUE : ${Number.MAX_VALUE}`);
console.log(`MIN_VALUE : ${Number.MIN_VALUE}`);
console.log(`EPSILON: ${Number.EPSILON}`);
console.log(`POSITIVE_INFINITY: ${Number.POSITIVE_INFINITY}`);
console.log(`NEGATIVE_INFINITY: ${Number.NEGATIVE_INFINITY}`);
console.log(`NaN : ${Number.NaN}`);

console.log("Static method of String");
// isFinite()
console.log(`isFinite: ${Number.isFinite(1 / 0)}`);
console.log(`isFinite: ${Number.isFinite(10 / 5)}`);

// isInteger();
console.log(`isInteger: ${Number.isInteger(10 / 6)}`);

// isNaN()
console.log(`isNaN : ${Number.isNaN(NaN)}`);
console.log(`isNaN : ${Number.isNaN(undefined)}`);
console.log(`isNaN : ${isNaN(NaN)}`);
console.log(`isNaN : ${isNaN(undefined)}`);

// isSafeInteger();
console.log(
  `isSafeInteger: ${Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)}`,
);

// Number.parseFloat() and Number.parseInt()

// Instance methods of Number
// toExponential()
console.log(`toExponential: ${num1.toExponential()}`);

// toFixed()
console.log(`toFixed: ${num2.toFixed(2)}`);

// valueOf()
const numObj = new Number(42);
const num = numObj.valueOf();
console.log(typeof numObj);
console.log(num);
console.log(typeof num);

// not understand
// toPrecision();
function precise(x) {
  return x.toPrecision(4);
}

console.log(precise(123.456)); // Expected output: "123.5"

console.log(precise(0.004)); // Expected output: "0.004000"

console.log(precise(1.23e5)); // Expected output: "1.230e+5"

//************************************ Math Object************************************
console.log(Math.PI);
console.log(Math.sqrt(2));
console.log(Math.pow(2, 3));
console.log(Math.abs(-3)); //convert - to + value
console.log(Math.floor(1.226566)); //lower bound
console.log(Math.round(1.226566));
console.log(Math.ceil(1.226566)); //upper bound
console.log(Math.max(2, 4, 1, 3));
console.log(Math.min(2, 4, 1, 3));

let min = 50;
let max = 60;
console.log(Math.random() * (max - min + 1) + min); //Note
