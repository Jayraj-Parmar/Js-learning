// type of define objects
// not understand properly about literals and constructor
// literals -> singletone
// constructor -> Non-Singletonea
// https://medium.com/@mandeepkaur1/object-literal-vs-constructor-in-javascript-df143296b816#:~:text=Objects%20created%20using%20object%20literals,will%20not%20affect%20other%20instances.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

const mySymbol = Symbol("key1");
// literals
const obj = {
  name: "jayraj",
  location: "Ahemdabad",
  mobile: 886644,
  position: "CEO",
  "e mail": "jayraj6262@gmail.com",
  [mySymbol]: "mykey1",
};

// fetch value
console.log(`name : ${obj.name}`);
// console.log(`name : ${obj[name]}`); //name is not define error : solution "name"
console.log(`name : ${obj["name"]}`);
console.log(`e-mail : ${obj["e mail"]}`);
console.log(`Symbol : ${obj[mySymbol]}`); //must fetch using this syntext

// freez Object
obj.name = "sumit";
// Object.freeze(obj);
obj.name = "karan";
console.log(obj);

obj.fun = function () {
  console.log(`Hello ${this.name}`);
};
console.log(obj);
console.log(obj.fun);
console.log(obj.fun());

obj["fun1"] = function () {
  console.log(`hello ${this.name}`);
};
console.log(obj["fun1"]);

// constructor
const user = new Object();

// methods
// assign
const obj1 = { 0: "a", 1: "b" };
const obj2 = { 2: "c", 3: "d" };
const obj3 = Object.assign(obj1, obj2);
console.log("assign obj3 :", obj3);
console.log("assign obj1 :", obj1);

const obj4 = { 0: "a", 1: "b" };
const obj5 = { 1: "c", 3: "d" };
const obj6 = Object.assign({}, obj4, obj5);
console.log("assign obj6 :", obj6); //intresting
console.log("assign obj4 :", obj4);

//spread operator
const obj7 = { ...obj2, ...obj3, ...obj4 };
console.log("spread obj7 :", obj7);
console.log("spread obj2 :", obj2);

// key,value,entries
console.log("keys:", Object.keys(obj1));
console.log("values:", Object.values(obj1));
console.log("entries:", Object.entries(obj1));
console.log("type of entries :", typeof Object.entries(obj1));

//use in react
console.log("object de-structure");
const { position } = obj;
console.log("position from obj : ", position);
const { position: pos } = obj;
console.log("position from obj : ", pos);

// Convert Array to Object and static methods
const array = [
  ["name", "jayraj"],
  ["age", 18],
];
const object1 = Object.fromEntries(array);
console.log(object1);

console.log("object1's PropertyNames : ", Object.getOwnPropertyNames(object1));
console.log(
  "fooo(String)'s PropertyNames : ",
  Object.getOwnPropertyNames("fooo"),
);
const arr = ["a", "b", "c"];
console.log("arr's PropertyNames : ", Object.getOwnPropertyNames(arr));

console.log(Object.getPrototypeOf("foo"));

const proto = {};
const obj8 = Object.create(proto);
console.log(Object.getPrototypeOf(obj8) === proto);

// not understude
const object2 = {};
const parent = { foo: "bar" };
Object.setPrototypeOf("", obj8, parent);
console.log(obj.foo);
