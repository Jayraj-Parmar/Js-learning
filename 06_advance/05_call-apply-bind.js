const user1 = {
  firstName: "Jayraj",
  lastName: "Parmar",
};
const user2 = {
  firstName: "Sumit",
  lastName: "Rathod",
};
function printMe(city, state) {
  console.log(
    `${this.firstName} ${this.lastName} , City is ${city} and State is ${state}`
  );
}

printMe.call(user1, "Dhrangadhra", "Gujarat");
console.log(printMe.bind(user2, "Hirapur", "Gujarat"));
const print = printMe.bind(user2, "Hirapur", "Gujarat");
print;
print();
printMe.apply(user1, ["Hirapur", "Gujarat"]);
// 05_oop/04_call.js
