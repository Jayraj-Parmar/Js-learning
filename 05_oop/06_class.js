class parent {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
}
class child extends parent {
  constructor(username, email, password) {
    super();
    this.password = password;
  }
  print() {
    return `username: ${this.username}, e-mail: ${this.email}, password:${this.password}`;
  }
}
const user1 = new child("jayraj", "jayraj@6262gmail.com", "jayraj@6262");
console.log(user1.print());
