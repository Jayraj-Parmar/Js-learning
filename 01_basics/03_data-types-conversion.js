// 1. * to string
// let x = 3; // number to string
// let x = 3.22; // number to string
// let x = null; //null to string
// let x = undefined; //undefined to String
// let x = true; //boolean to String
let x = 1004658465n; //bigInt to String
let xToString = String(x);
console.log("* to String");
// console.table([xToString, typeof xToString]);

//2. * to boolean
// let y = 0; // number to boolean
// let y = 150; // number to boolean
// let y = 150.12; // number to boolean
// let y = null; //null to boolean
// let y = undefined; //undefined to boolean
// let y = ""; //String to boolean
// let y = "aasdf"; //String to boolean
// let y = 1004658465n; //bigInt to boolean
let y = 0n; //bigInt to boolean
let yToBoolean = Boolean(y);
console.log("* to boolean");
// console.table([yToBoolean, typeof yToBoolean]);

//3. * to number
// let z = "33abc"; //string to number
// let z = "33"; //string to number
// let z = "33.12"; //string to number
// let z = ""; //string to number
let z = null; //null to number
// let z = undefined; //undefined to number
// let z = true; //boolean to number
// let z = 165478654n; //bigInt to number
let zToNumber = Number(z);
console.log("* to number");
// console.table([zToNumber, typeof zToNumber]);

// 4. * to bigInt
// let a = 101; //number to bigInt
// let a = 101.12; //number to bigInt (not convert)
// let a = "jayraj"; //String to bigInt (not convert)
// let a = ""; //String to bigInt
// let a = null; //null to bigInt (not converts)
// let a = undefined; //undefined to bigInt (not convert)
// let a = true; //boolean to bigInt
// let a = false; //boolean to bigInt
let aTobigInt = BigInt(a);
console.log("* to bigInt");
console.table([aTobigInt, typeof aTobigInt]);

// let b = "10";
let b = "10.1512";
let int = parseInt(b);
let float = parseFloat(b);
console.log(int, float);
