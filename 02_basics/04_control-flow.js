let balance = 500;
if (balance !== 500) {
  console.log("condition applied");
} else if (balance == "500") {
  console.log("seconde condition apply");
} else {
  console.log("conditin not applied");
}
console.log("code execute sucessfully");
// >,>=,<,<=,==,===,!=,!==,&&,||,!

console.log("++++++ Switch Case ++++++");
let month = 1;
switch (month) {
  case 1:
    console.log("Jan");
  // break; if not break
  case 2:
    console.log("Feb");
    break;

  default:
    console.log("another month");
    break;
}

// falsy value
// false, 0, -0 ,BigInt 0n, "",null, undefined, NaN

// truthy value
// true, "0", " ", "false", [], {}, function () {};

console.log("++++ Nullish Coalescing Operator (??) null undefined +++");

let val1;
val1 = 5 ?? 10; //5
val1 = null ?? 10; //10
val1 = undefined ?? 10; //10
val1 = 3 ?? undefined ?? 10; //3
val1 = true ?? undefined ?? 10; //true
val1 = false ?? null ?? 10; //false
val1 = null ?? undefined; //undefined
console.log(val1);

console.log("+++ Ternary/Conditional Operator +++");
let val = 10;
val == 10 ? console.log("value matched") : console.log("value not matched");
