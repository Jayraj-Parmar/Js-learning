// In this code file about fetch attribute of html document
// diff. between innerHtml,innerText and textContent
// querySelector(): and querySelectorAll(): These methods allow you to use CSS selectors to target specific child elements.

const mainHeading = document.getElementById("main");
// console.log(mainHeading);
// console.log(mainHeading.innerHTML);
// console.log(mainHeading.innerText);
// console.log(mainHeading.id);
// console.log(mainHeading.class);
// console.log(mainHeading.className);
// console.log(mainHeading.classList);
// console.log(mainHeading.getAttribute); // the output want to say that it's a function
// console.log(mainHeading.getAttribute("id"));
// console.log(mainHeading.getAttribute("className"));
// console.log(mainHeading.getAttribute("class"));
// mainHeading.setAttribute("class", "test"); //overwrite the value of class attribute
mainHeading.style.background = "black";
mainHeading.style.color = "white";

console.log("diff. in textContent , innerText and innerHtml");
// console.log(mainHeading.textContent);
// console.log(mainHeading.innerText);
// console.log(mainHeading.innerHtml);

const sectionQuerySelctor = document.querySelector(".section");
// console.log(sectionQuerySelctor);
// console.log(sectionQuerySelctor);
// console.log(sectionQuerySelctor.innerHTML);
// console.log(sectionQuerySelctor.innerText);
// console.log(sectionQuerySelctor.id);
// console.log(sectionQuerySelctor.className);

const headingClass = document.getElementsByClassName("main-heading");
// console.log(headingClass);
// console.log(headingClass.innerHTML); //not fetch direct because getElementsByClassName return HTMLCollection
// console.log(headingClass[0]);
// console.log(headingClass[0].innerHTML);
// console.log(headingClass[0].id);

const sectionClass = document.getElementsByClassName("section");
// console.log(sectionClass);
// console.log(sectionClass[0].innerHTML);
// console.log(sectionClass[0].id);
// console.log(sectionClass[1].id);

const sectionTag = document.getElementsByTagName("div");
// console.log(sectionTag);
// console.log(sectionTag[0].innerHTML);
// console.log(sectionTag[0].id);
// console.log(sectionTag[1].id);

const sectionName = document.getElementsByName("info");
// console.log(sectionName);
// console.log(sectionName.innerHTML);
// console.log(sectionName[0].innerHTML);
// console.log(sectionName[0].getAttribute("id"));
// console.log(sectionName[1].getAttribute("class"));

const sectionQuerySelctorAll = document.querySelectorAll(".section");
// console.log(sectionQuerySelctorAll);
// console.log(sectionQuerySelctorAll.innerHTML);
// console.log(sectionQuerySelctorAll[0].innerHTML);
// console.log(sectionQuerySelctorAll[0].getAttribute("id"));
// console.log(sectionQuerySelctorAll[1].getAttribute("class"));

const firstSection = document.querySelector("ul li:first-child"); //or only li:first-child
console.log(firstSection);
