class user {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }
  get username() {
    console.log("Getter name...");
    return this._username;
  }

  set username(value) {
    console.log("Setter name..");
    this._username = value.toUpperCase();
  }
}
const user1 = new user("jaryaj6262", "j@6262");
console.log(user1.username);
user1.username = "Sumit7669";
console.log(user1.username);
