let str = "jayraj";

let arr = ["jayraj", 20, true];

let obj = {
  name: "jayraj",
  age: 20,
  "e-mail": "jayraj62@gmail.com",
};

let map = new Map();
map.set("name", "jayraj");
map.set(62, 62);
map.set("age", 20);
console.log(map);

//Higher Order Iteration

//1.for..of
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
console.log("for..of - string only value");
for (const element of str) {
  console.log(element);
}
//instresting
console.log("instresting");
for (const [key, value] of str) {
  console.log(key, value);
}

console.log("for..of - array only value");
for (const element of arr) {
  console.log(element);
}

// array is not iterable like bellow
// for (const [key, value] of arr) {
//   console.log(key, value);
// }

console.log("for..of - Map");
for (const element of map) {
  console.log(element);
}
console.log("for..of - Map key and value");
for (const [key, value] of map) {
  console.log(key, value);
}

// objects is not itrable using for..of loop
console.log("for..of - Obj");
console.log("objects is not itrable using for..of loop");
// for (const element of obj) {
//   //TypeError: obj is not iterable
//   console.log(element);
// }

//2 for..in
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
https: console.log("+++++++++++++++ for..in +++++++++++++++");

console.log("for..in - String only key");
for (const key in str) {
  console.log(key);
}

console.log("for..in - String key and value");
for (const key in str) {
  console.log(`${key} : ${str[key]}`);
}

console.log("for..in - Array only key");
for (const key in arr) {
  console.log(key);
}

console.log("for..in - Objects key and value");
for (const key in arr) {
  console.log(`${key} : ${arr[key]}`);
}

console.log("for..in - Objects only key");
for (const key in obj) {
  console.log(key);
}

console.log("for..in - Objects key and value");
for (const key in obj) {
  console.log(`${key} : ${obj[key]}`);
}
// map is not iterable in for..in loop
console.log("");
console.log("for..in - Map only key");
console.log("map is not iterable in for..in loop");
for (const key in map) {
  console.log(map[key]);
}
