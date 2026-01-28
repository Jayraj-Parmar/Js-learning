// How function is object in js

function powerOf(n, m) {
  return Math.pow(n, m);
}
powerOf.val = 2;
console.log(powerOf(2, 3));
console.log(powerOf.val);
console.log(powerOf.prototype);

function inObject(username, score) {
  this.username = username;
  this.score = score;
  // return this;
}

inObject.prototype.increaseScore = function () {
  return ++this.score;
};

inObject.prototype.printMe = function () {
  console.log(`Hello I am ${this.username} and my score is ${this.score}`);
};

const user1 = new inObject("jayraj", 10);
console.log(user1.increaseScore()); //not possible without new keyword
console.log(user1);
user1.printMe();
