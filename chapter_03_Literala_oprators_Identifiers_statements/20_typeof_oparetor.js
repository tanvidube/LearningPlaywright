// typeof operator 

let num = 42; // number // ye integer nahi aaeya kyuki JS mai integer ya float hote hi nahi hai 

let str = "Hello"; // string
let bool = true; // boolean
let un; // undefined
let obj = { name: "John", age: 30 }; // object
let arr = [1, 2, 3]; // array
let func = function () { }; // function
let n = null; // null

console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof bool); // "boolean"
console.log(typeof un); // "undefined"
console.log(typeof obj); // "object" -this is a bug in java script 
console.log(typeof arr); // "object"
console.log(typeof func); // "function"
console.log(typeof n); // "object" - this is also a bug in java script