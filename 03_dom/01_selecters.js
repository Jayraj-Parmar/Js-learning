// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName
console.log("getElementsByTagName - return HTMLCollection");
const tagName = document.getElementsByTagName("div");
console.log(tagName);
//if tag not exist than return empty HTMLCollection

console.log("getElementByID");
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
const h1Id = document.getElementById("h1");
const divId = document.getElementById("div");
const divId1 = document.getElementById("div1");
console.log(h1Id);
console.log(divId);
console.log(divId1); //null not exist

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
console.log("getElementsByClassName - return HTMLCollection");
const h1Class = document.getElementsByClassName("h1");
const divClass = document.getElementsByClassName("div");
// Get all elements that have a class of 'test', "INSIDE" of an element that has the ID of 'main':
const divClass1 = document.getElementById("main").getElementsByClassName("div");
const divClass2 = document.getElementsByClassName("div")[0];
// if it not find class or id then return empty HTMLCollection
console.log("ByClassName", h1Class);
console.log("ByClassName", divClass);
console.log("ByClassName + ById", divClass1);
console.log("ByClassName [0] ", divClass2);

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName
console.log("getElementsByName - return NodeList");
const inp = document.getElementsByName("up");
console.log("ByName", inp);

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
console.log("querySelector");
const tag = document.querySelector("div");
const className = document.querySelector(".div");
const id = document.querySelector("#div");
console.log(tag);
console.log(className);
console.log(id);

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
console.log("querySelectorAll - return NodeList  ");
const tag1 = document.querySelectorAll("div");
const className1 = document.querySelectorAll(".div");
const id1 = document.querySelectorAll("#div");
console.log(tag1);
console.log(className1);
console.log(id1);
// if not exist value then return empty NodeList

// HTMLCollection
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
console.log("HTMLCollection");
// getElementsByTagName(), getElementsByClassName();
console.log("instance property (length) : ", divClass.length);
console.log("instance method (item(0)) : ", divClass.item(0));
console.log("instance method (item(1)) : ", divClass.item(1));
console.log("divClass[0] : ", divClass[0]);
console.log("divClass[1] : ", divClass[1]);
console.log(
  "instance method (namedItem('name')) : ",
  divClass.namedItem("info")
);

// https://developer.mozilla.org/en-US/docs/Web/API/NodeList
console.log("NodeList");
// getElementsByName(), querySelectorAll();
console.log("instance property (length) : ", tag1.length);
console.log("instance method (item(0)) : ", tag1.item(0));
console.log("instance method (item(1)) : ", tag1.item(1));
console.log("tag1[0] : ", tag1[0]);
console.log("tag1[1] : ", tag1[1]);

console.log("forEach");
tag1.forEach((item) => console.log(item));
