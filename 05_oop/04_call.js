function setUser(username) {
  this.username = username;
  console.log(username);
}
function createUser(username, email, password) {
  //   setUser.call(username);
  //   setUser(username);
  setUser.call(this, username);
  this.email = email;
  this.password = password;
}
const user = new createUser("jayraj", "j62@gmail.com", "jay#aj");
console.log(user);
