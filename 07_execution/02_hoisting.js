// var x = 20;
// function getName() {
//   console.log("Hello JS");
// }
// getName();
// console.log(x);

// output
// Hello JS
// 20

// console.log(x);
// var x = 20;
// function getName() {
//   console.log("Hello JS");
// }
// getName();

// output
// undefined
// Hello JS

// console.log(x);
// getName();
// function getName() {
//   console.log("Hello JS");
// }

//error
// Uncaught RefferenceError: x is not defined

// console.log(getName);
// function getName() {
//   console.log("Hello JS");
// }
// console.log(getName);

// ontput
// gives full function code in both case

// getName2();
// function getName() {
//   console.log("Hello JS");
// }

//error
// Uncaught RefferenceError: getName2 is not defined

// console.log(getName);
// var getName = () => {};//treat as variable
// var getName = function () {};//treat as variable

// console.log(getName);
// const getName = 10; //Cannot access 'getname' before initialization
// let getName = 20; //Cannot access 'getname' before initialization

// var a = 10;
// console.log(a);

// console.log(a);
// let a = 10;

// const a = 10;
// a = 1000;

// const radius = [10, 20, 30];
// function calcArea(radius) {
//   let areas = [];
//   for (let r = 0; r < radius.length; r++) {
//     let area = 2 * Math.PI * Math.pow(radius[r], 2);
//     areas.push(area);
//   }
//   return areas;
// }
// console.log(calcArea(radius));

// function area(radius) {
//   return 2 * Math.PI * Math.pow(radius, 2);
// }

// function calculate(radius, logic) {
//   let temp = [];
//   for (let r = 0; r < radius.length; r++) {
//     temp.push(logic(radius[r]));
//   }
//   return temp;
// }
// console.log(calculate(radius, area));

// console.log(radius.map(area));

// Array.prototype.calculate = function (logic) {
//   let temp = [];
//   for (let r = 0; r < this.length; r++) {
//     temp.push(logic(this[r]));
//   }
//   return temp;
// };
// console.log(radius.calculate(area));

// diameter: 2*radius
// area: 3.14*r*r
// circumference: 2*3.14*radius

// var isPalindrome = function (x) {
//   let temp = x;
//   let last = 0;
//   while (temp) {
//     last = last * 10 + (temp % 10);
//     console.log(last);
//     temp = parseInt(temp / 10);
//     console.log(temp);
//   }
//   console.log(last);
//   console.log(temp);

//   return last === x;
// };

// console.log(parseInt(10 / 3));

// isPalindrome(-121);

// function surname(surname) {
//   return function (name) {
//     console.log(name, surname);
//   };
// }
// const x = surname("parmar");
// x("jayraj");

// const name = function (name) {
//   return name;
// };
// function surname(cb) {
//   return `Hello + ${name}`;
// }

// surname(name("jayraj"));

// function asyncHandle(fn) {
//   return fn(x, y);
// }

// asyncHandle(function (x, y) {
//   console.log(x, y);
// });

// function callHandle(fn) {
//   return fn(x, y);
// }
// callHandle(function call(x, y) {
//   // Code
//   console.log(x, y);
// });

// function fullname(surname) {
//   return function (name) {
//     console.log(surname, name);
//   };
// }
// const x=fullname('third')
// x('party')

function getData(callback) {
  callback(10);
}
const x = (result) => {
  console.log(result);
};
getData(x);
