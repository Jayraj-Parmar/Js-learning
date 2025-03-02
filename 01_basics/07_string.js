// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
let str = "jayraj"; //Primitive

let anotherStr = new String("jayraj"); //Not Primitive
console.log(`${typeof str} and str : ${str}`);
console.log(`${typeof anotherStr} and anotherStr : ${anotherStr}`);

// Constructor
console.log(`str instanceof String : {str instanceof String}`);
console.log(`anotherStr instanceof String :${anotherStr instanceof String}`);

console.log("Instance propertie of String");

console.log(`length of String :${str.length}`);

console.log("Static methods of String-not understude");

console.log("Instance methods of String");
console.log(str[2]);
console.log(str[22]);
console.log(anotherStr[2]);
console.log(anotherStr[22]);

//at()
console.log(`at:${str.at(0)}`);
console.log(`at:${anotherStr.at(0)}`);

//charAt()
console.log(`charAt(0):${str.charAt(0)}`);
console.log(`charAt(0):${anotherStr.charAt(0)}`);

//charCodeAt()
console.log(`charCodeAt():${str.charCodeAt(0)}`);
console.log(`charCodeAt():${anotherStr.charCodeAt(0)}`);

//codePointAt()
console.log(`codePointAt():${str.codePointAt(0)}`);
console.log(`codePointAt():${anotherStr.codePointAt(0)}`);

//concate()
console.log(`concate() : ${str.concat(anotherStr)}`);
console.log(`concate() : ${anotherStr.concat(str)}`);

//endsWith() and startsWith() return boolean value
console.log(`endsWith:${str.endsWith("aj")}`);
console.log(`startsWith:${anotherStr.startsWith("raj")}`);

//includes()
console.log(`includes:${str.includes("ayr")}`);
console.log(`includes:${anotherStr.includes("ayr")}`);

//indexOf()
console.log(`indexOf:${str.indexOf("j")}`);
console.log(`indexOf:${anotherStr.indexOf("r")}`);

//lastIndexOf()
console.log(`lastIndexOf:${str.lastIndexOf("j")}`);
console.log(`lastIndexOf:${anotherStr.lastIndexOf("r")}`);

//toLowerCase() and toUpperCase()
console.log(`toLowerCase:${anotherStr.toLowerCase()}`);
console.log(`toUpperCase:${str.toUpperCase()}`);

//trimStart() and trimEnd() and trim()
console.log(`trimStart:${"      Hello     ".trimStart()}`);
console.log(`trimStart:${"     Hello      ".trimEnd()}`);
console.log(`trim:${"     Hello      ".trim()}`);

// split() return array
console.log(`split:${"jayraj parmar".split()}`);
console.log(`split:${"jayraj parmar".split("")}`);
console.log(`split:${"jayraj parmar".split(" ")}`);

// replace() and replaceAll()
console.log(`replace:${str.replace("j", "R")}`);
console.log(`replaceAll:${anotherStr.replaceAll("j", "R")}`);

//search()
console.log(`search:${str.search("ay")}`);

//substring()
console.log(`substring:${str.substring(1, 3)}`);
console.log(`substring:${str.substring(1, 10)}`);

// slice()
console.log(`slice:${str.slice(1)}`);
console.log(`slice:${str.slice(1, 8)}`);

// toLocaleLowerCase()
console.log(`toLocaleLowerCase EN-US: ${str.toLocaleLowerCase("en-US")}`);
console.log(`toLocaleLowerCase TR: ${str.toLocaleLowerCase("tr")}`);

// toLocaleUpperCase()
console.log(`toLocaleUpperCase EN-US: ${str.toLocaleUpperCase("en-US")}`);
console.log(`toLocaleUpperCase TR: ${str.toLocaleUpperCase("tr")}`);

// repeat()
console.log(`repeat:${str.repeat(3)}`);

//padStart() and padEnd()
let subStr = str.slice(-2);
console.log(`padStart :${subStr.padStart(str.length, "*")}`);
console.log(`padEnd:${subStr.padEnd(str.length, "*")}`);

// valueOf(`);
let sum = "2+2";
console.log(`eval(sum)`);

let sum1 = new String("2+2");
// console.log(`eval(sum1)`);//not expected ourput
let temp = sum1.valueOf();
console.log(`using valueOf in object :${eval(temp)}`);

// Not understude
// match(),matchAll(),normalize(),isWellFormed()
let str1 = "For more information, see Chapter 3.4.5.1";
const re = /see (chapter \d + (\.\d)*)/i;
const found = str1.match(re);
console.log(`found`);
