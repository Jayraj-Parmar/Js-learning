//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const array = [1, 2, 3, [4, 5, 6, [7, 8]]];
const arr = ["jayraj", 20, true];
const arr1 = [1, 2, 3, , 4, 5, 6, 7, 8, 9];
console.log("+++++++++++++++ forEach +++++++++++++++");
array.forEach((item) => {
  // if(item==2){
  //     continue;
  //     break;    // break and continue not use in forEach loop
  // }
  console.log(item);
});

console.log("forEach() - instresting");
const value = arr.forEach((item) => {
  console.log(item);
});
console.log(value);

console.log("Parameter of forEach");
arr1.forEach(function (value, index, array) {
  console.log("value", value, "index :", index, "array:", array);
});

// filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// array.filter((element)=> condtion(element))
console.log("+++++++++++++++ filter +++++++++++++++");
const newArray = arr1.filter((num) => num > 3);
console.log(newArray);

const newArray1 = arr1.filter((num) => {
  return num > 3;
});
console.log(newArray1);

const detials = [
  { name: "jayraj", age: 20 },
  { name: "sumit", age: 21 },
  { name: "yashpal", age: 20 },
  { name: "deep", age: 19 },
  { name: "jay", age: 20 },
];
console.log("filter() - array of Objects");
const filterData = detials.filter((data) => data.age < 20);
console.log(filterData);

console.log("filter() - array of Objects parameters");
const filterData1 = detials.filter((element, index, array) => index >= 2);
console.log(filterData1);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// map()
console.log("+++++++++++++++ map +++++++++++++++");
const newArray2 = arr1.map((num) => num + 10);
console.log(newArray2);

console.log("Parameter of Map");
const newArray4 = arr1.map((value, index, arr1) => {
  console.log("value", value, "index :", index, "array:", arr1);
});
newArray4;

console.log("map - chaining");
const newArray3 = arr1
  .map((num) => num * 10)
  .map((num) => {
    return num + 10;
  })
  .filter((num) => num > 40);

console.log(newArray3);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// reduce
console.log("reduce");
const neArray5 = arr1.reduce((prev, current, currentIndex, arr1) => {
  console.log(prev, current, currentIndex, arr1);
  return prev + current;
}, 5);
console.log(neArray5);
