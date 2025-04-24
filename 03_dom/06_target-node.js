console.log("Target Parent Node via Child.");
const parent = document.querySelector(".parent");
const child1 = document.querySelector(".child-1");
const child2 = document.querySelector(".child-2");

console.log(child1.parentNode);
console.log(child2.parentNode);

console.log(child1.parentElement);
console.log(child2.parentElement);

console.log(child1.closest(".parent")); //Traverses up the DOM tree
console.log(parent.closest(".child1")); //No Traverses down (null)

console.log("Target Child Node via Parent.");
console.log(parent.childNodes); //it's return NodeList (elements,texts and comments)

console.log(parent.children); //it's return HTMLCollection;

console.log(parent.firstChild); //it's return elements or text or comments
console.log(parent.lastChild);

console.log(parent.firstElementChild); //it's return first or last element.
console.log(parent.lastElementChild);

console.log("Target Child Node via Parent using CSS Selectors");
const parentToChild = document.querySelector(".parent > .child-1");
console.log(parentToChild);

console.log("Targate Nighbour Nodes.");
console.log(child1.nextSibling);
console.log(child2.nextSibling);

console.log(child1.nextElementSibling);
console.log(child1.nextElementSibling.nextElementSibling);
console.log(child2.nextElementSibling); //if not exist next node then return "null"

console.log(child1.previousSibling);
console.log(child2.previousSibling);

console.log(child1.previousElementSibling); //if not exist previous node then return "null"
console.log(child2.previousElementSibling);
