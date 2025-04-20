// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

const tagName = document.getElementsByTagName("div");
console.log(tagName);
// console.log(tagName[0].innerHTML);
// console.log(tagName[0].innerText);
// console.log(tagName[0].textContent);

const querySelctor = document.getElementsByClassName("section");
console.log(querySelctor);

console.log("instance property and methods of HTMLCollection");
// console.log(tagName.length);
// console.log(tagName.item(0));
// console.log(tagName.item(1));
// console.log(tagName.namedItem("section-1"));
// console.log(tagName.namedItem("nameItem"));

console.log("Convert HTMLCollection in Array");
// const convert = Array.tagName; //HTMLCollection not convert like NodeList
const convert1 = Array.from(tagName);
console.log(convert1);
convert1.forEach((item) => {
  console.log(item);
});
