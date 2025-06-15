// function in object
// this keyword
// Constructor function
// new keyword

const user = {
  username: "jayraj",
  "e-mail": "jayrajparmar@gmail.com",
  "mobile no.": "8866448435",
  income: 2000000000,
  address: "ahmedabad",

  details: function () {
    // console.log(username);//error
    console.log(this.username);
    return this;
  },
  // temp: details(),//error
};

// console.log(user.username);
// console.log(user.details);//[Function: details]
// console.log(user.details());
// console.log(user.temp); //error

const user2 = function (username, address) {
  // let userName = username;
  // let add = address;
  // console.log(userName, add);
  this.username = username;
  this.address = address;
  return this.username;
};
const userOne = user2("jayraj", "ahmedabad");
const userTwo = user2("jay", "ahmedabad");
// console.log(userOne);

const user3 = function (username, address) {
  this.username = username;
  this.address = address;
  return this;
};
const userThree = user3("jayraj", "ahmedabad");
const userFour = user3("jay", "ahmedabad");
// console.log(userThree);
// console.log(userThree === window); // true (in browser)

// Constructor
const user4 = function (username, address) {
  this.username = username;
  this.address = address;
  // return this; //default
};
const userFive = new user4("jayraj", "ahmedabad");
const userSix = new user4("jay", "ahmedabad");
console.log(userFive);
console.log(userSix);
