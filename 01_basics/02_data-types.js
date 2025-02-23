// Primitives Data Types
/*
1. number => 3, 2, 2.5, ..
2. bigInt => 9007199254740992n
3. string => ""
4. boolean => true / false 
5. Symbole => A data type whose instances are unique and immutable.
6. null => standalone value (type is object)
7. undefined => whose value is not defined (type is undefined)
*/

let a = 1;
let b = 900n;
let c = "jayraj";
let d = true;
let e;
let f = null;

console.table([
  typeof a,
  typeof NaN,
  typeof b,
  typeof c,
  typeof d,
  typeof e,
  typeof f,
]);

//Non-Primitives Data Types
/*
1.Array
2.Object
3.function
*/

function g() {}

const h = ["jayraj", 20, true];

const i = {
  name: "jayraj",
  age: 20,
  email: "jayrajsinh6262@gmail.com",
};
console.table([typeof g, typeof h, typeof i]);
