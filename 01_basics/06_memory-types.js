// 2 types of memory in JS
// 1. Stack (primitive data types : number,string,bigInt,boolean,null,undefined)
// 2. Heap  (Non-Primritive data types : array,Object,function)

// 1.Stack Example
let number = 3;
let anotherNumber = number;
anotherNumber = 4;
console.log(`anotherNumber : ${anotherNumber}`);
console.log(`number : ${number}`);

// 2.Heap Example
const object = { name: "jayraj", age: 20 };
const anotherObject = object;
anotherObject.name = "sumit";
console.log(`Object : ${object.name},${object.age}`); //It value be change
console.log(`anotherObject : ${anotherObject.name},${anotherObject.age}`);
