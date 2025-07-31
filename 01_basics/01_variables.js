// What does Dynamic Language mean?
// JavaScript is a dynamic language and not static, which means that variables can hold
// values of different types during runtime. Unlike languages such as Typescript or Java,
// you don't need to declare the data type of a variable explicitly.
// In java(int x,float y)

const accountId = 1234; //Not Change if overwrite
//try to overwrite value of const variable
accountId = 2; //TypeError: Assignment to constant variable

// if object and array store in const variable even thhough it change
const myObject = { key: "value" };
myObject.key = "otherValue";
console.log(myObject); //{ key: 'otherValue' }

const myArray = ["HTML", "CSS"];
myArray.push("JAVASCRIPT");
console.log(myArray); // ['HTML', 'CSS', 'JAVASCRIPT'];

// var
var accountEmail = "jayraj@gmail.com";
// Not use var variable type in coding because of issue in block scope and functional scope

// let
let accountCity = "Rajkot";
accountState = "Gujarat";
let name;

console.table([accountId, accountEmail, accountCity, accountState, name]);

// const and let are in Temporal dead Zone
// let and const are block scoped variables
