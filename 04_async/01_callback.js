function user(name, cb) {
  console.log(`Hi ${name}`);
  cb();
}
function sayHello() {
  console.log("Hello");
}
user("jayarj", sayHello);
