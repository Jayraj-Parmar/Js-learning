class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  printMe() {
    return `Hello I am ${this.username} and my e-mail is ${this.email}`;
  }
}

const user1 = new User("jayraj", "jayraj6262@gamil.com");
console.log(user1.printMe());

// Behind the secen
function user(username, email) {
  this.username = username;
  this.email = email;
}

user.prototype.printMe = function () {
  return `Hello I am ${this.username} and my e-mail is ${this.email}`;
};

const user2 = new user("jayraj", "jayraj6262@gamil.com");
console.log(user2.printMe());
