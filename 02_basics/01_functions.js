console.log("++++++++++++++++++ arguments and parameters ++++++++++++++++++");
console.log(addTwo(10, 20)); //args
function addTwo(parameter1, parameter2) {
  return parameter1 + parameter2;
  // console.log('Hello') //no code work after "return"
}

function user(name) {
  //name = "sumit"
  if (!name) {
    console.log("No User Found");
    return;
  }
  return `User is ${name}`;
}
console.log(user("jayraj"));
// console.log(user())

console.log("++++++++++++++++++++++++ rest opertor ++++++++++++++++++++++++");
function something(num) {
  return num; //100
}
function something(...num) {
  //rest operator (spread operator)
  return num; //[ 100, 200, 300, 400, 500 ]
}
function something(val1, val2, ...num) {
  return num; //[ 300, 400, 500 ]
}
console.log(something(100, 200, 300, 400, 500));

console.log("++++++++++++++++++ object pass in function ++++++++++++++++++");
function detials(info) {
  return `Hello ${info.name} your ID is ${info.id}`;
}
console.log(detials({ name: "jayraj", id: 62 }));

console.log("++++++++++++++++++ array pass in function ++++++++++++++++++");
function arr(arr) {
  console.log("Array is : ", arr);
}
arr([10, 20, 30, 40]);

console.log("+++++++++++++++ function store in variable +++++++++++++++");
// fun() //ReferenceError
const fun = function variable() {
  console.log("Hello");
};
fun(); //run secessfully

console.log("++++++++++++++++++++ This Keyword ++++++++++++++++++++");

const user1 = {
  name: "jayraj",
  location: "USA",
  welcomeMessage: function () {
    console.log(`Hello ${this.name}, welcome to ${this.location}`);
    console.log(this);
  },
};
user1.welcomeMessage();
console.log(this);

function chai() {
  let username = "jayraj";
  // username = 'jayraj'
  console.log("this in fun :", this.username);
}
chai();

console.log("++++++++++++++++++++ Arrow Function (ES6) ++++++++++++++++++++");
const arrowFun = (num1, num2) => {
  return num1 + num2;
};
console.log(arrowFun(10, 20));

const arrowFun1 = (num1, num2) => num1 + num2;
// const arrowFun1 = (num1, num2) => num1 + num2 //execute same as above
console.log(arrowFun1(10, 20));

const user2 = {
  name: "jayraj",
  location: "USA",
  welcomeMessage: () => {
    console.log(`Hello ${this.name}, welcome to ${this.location}`);
    console.log(this);
  },
};
user2.welcomeMessage();
console.log(this);
