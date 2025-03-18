// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// decleration
let array = ["jayraj", , true, 10, null, undefined];
let arr = new Array("jayraj", true, 10, null, undefined);
// let arr=new Array("jayraj", , true, 10, null, undefined)

// shallow - copied
let tempArr = arr;
tempArr.push(5);
console.log(`tempArr:${tempArr}`);
console.log(`arr:${arr}`);

// Iteration or fetch value
console.log(`Arr :${arr}and type of Arr : ${typeof arr}`);
console.log(`Array :${array}`);
console.log(`Array :${array["0"]}`);
console.log(`Array :${array[3]}`);
console.log(`Array :${array["01"]}`);
// console.log(`Array :${array[6]}`);
// console.log(`Array :${array[-6]}`);

// Static method of Array
console.log(`Array.from : ${Array.from("foo")}`);

console.log(Array.fromAsync("foo")); //not understand
console.log(`Array.from : ${Array.from({ name: "Jayraj" })}`); //Interesting output []

console.log(`ArrayOf : ${Array.of(10, 5, 10, "jayaj")}`);
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(`ArrayOf score : ${Array.of(score1, score2, score3)}`);

console.log(`isArray : ${Array.isArray([10, "jayraj"])}`);

//Properties of Array
console.log(`length of Array :${array.length}`);

//Instance method of Array
//Static isArray()
console.log(`isArray:${Array.isArray(arr)}`);

// push() and pop()
array.push(3);
console.log(`Push : ${array}`);
array.pop();
console.log(`Pop : ${array}`);

// unshift() and shift()
array.unshift(9);
console.log(`unshift : ${array}`);
array.shift();
console.log(`shift : ${array}`);

// combine array
const array1 = [10, "jayraj", "parmar", true];
const array2 = [10, "jayraj", "parmar", true];
console.log(`concat : ${array1.concat(array2)}`);
console.log(`sprede oprator : ${[...array1, ...array2]}`);
console.log(`array1 :${array1}`);
console.log(`array1 :${array2}`);

//entries()
console.log(`entries : ${array1.entries().next.value}`); //not valid
const ite = array1.entries(); //must be in new variables
console.log(ite.next().value);
console.log(ite.next().value);
console.log(ite.next().value);
console.log(ite.next().value);
console.log(ite.next().value);

// flat()
const arr1 = [0, 1, 2, [[3, 4], 100], [[3, 4]]];
console.log("****flat****");
console.log(arr1.flat());
console.log(arr1.flat(2));
console.log(arr1.flat(3));
console.log(arr1.flat(Infinity));

// forEach
array1.forEach((element) => {
  console.log(`Iteration using foreach : ${element}`);
});

// array's method study in mdn compulsory once
