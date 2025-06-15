// prototype

const arr = ["jayraj", 100000000];
Object.prototype.jayraj = function () {
  console.log("jayraj at top level");
};
arr.jayraj();

const userDetails = {
  username: "jayraj",
  password: "j@2005",
};
const user = {
  isUsed: true,
  __proto__: userDetails,
};
// console.log(user);
// console.log(user.__proto__);

const parentUser = {
  isLogIn: true,
};

// modern Symtaxt
Object.setPrototypeOf(parentUser, userDetails);
// Object.setPrototypeOf(parentUser, [userDetails, user]);
console.log(parentUser.__proto__);
