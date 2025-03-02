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
Array.from("foo");
Array.fromAsync();

//properties
console.log(`length of Array :${array.length}`);

//method
//Static isArray()
console.log(`isArray:${Array.isArray(arr)}`);

// push() and pop
array.push(3);
console.log(`Push : ${array}`);
array.pop();
console.log(`Pop : ${array}`);

// unshift() and shift()
array.unshift(9);
console.log(`unshift : ${array}`);
array.shift();
console.log(`shift : ${array}`);
