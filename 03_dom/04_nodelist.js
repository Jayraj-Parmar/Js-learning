// https://developer.mozilla.org/en-US/docs/Web/API/NodeList

const name = document.getElementsByName("nameItem");
// console.log(name);

const querySelectorAll = document.querySelectorAll(".section");
console.log(querySelectorAll);

console.log("Instance properties");
// console.log(querySelectorAll.length);

console.log("Instance Method");
// 1. item()
// console.log(name.item(0));

// 2. entries()
const entries = querySelectorAll.entries();
// console.log(entries);
for (const element of entries) {
  //   console.log(element);
  element.forEach((item) => {
    // console.log(item);
  });
}

// 3. forEach()
name.forEach((section) => {
  //   console.log(section);
});

//4. key()
const keys = name.keys();
// console.log(keys);
for (const key of keys) {
  //   console.log(key);
}

//5. values()
const values = querySelectorAll.values();
// console.log(values);
for (const value of values) {
  //   console.log(value);
}

console.log("Convert NodeList in Array");
// const arr = Array.querySelectorAll(); //NodeList not convert into array like this

const array = Array.from(querySelectorAll);
// console.log(array);
// console.log(array.pop());
// console.log(array);
array.push(querySelectorAll[1]);
// console.log(array);
