function parent1() {
  let name = "Parmar";
  function child() {
    console.log(name);
  }
  child();
}
// parent1();

function parent2() {
  let name = "Parmar";
  function child() {
    console.log(name);
  }
  return child;
}
// parent2()();
const user = parent2();
user();
