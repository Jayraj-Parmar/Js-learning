console.log("++++++++++++++ Globle Scope and Local Scope ++++++++++++++");
// this is Global Scope

// {
//     this is local scope
// }

let a = 10;
const b = 20;
var c = 30;
function scope() {
  // local scope
  // console.log("a:", a);//10
  c = 40;
}
scope();
// console.log('c:', c);//40 cause of var

if (true) {
  // local scope
  let d = 50;
  const e = 60;
  var f = 70;
}
// console.log(d)//ReferenceError
// console.log(e)//RseferenceError
console.log("f:", f); //70 cause of var

function parent() {
  let g = 10;
  function child() {
    let h = 20;
    console.log(g);
  }
  // console.log(h);// ReferenceError
  child();
}
parent();

// child() //ReferenceError
