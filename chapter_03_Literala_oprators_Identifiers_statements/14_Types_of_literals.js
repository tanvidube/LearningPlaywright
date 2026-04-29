let a = 10; // Number literal
console.log(a);

let b = "Tanvi"; // String literal
console.log(b);

//string literal - can also be defined as 'Tanvi' , but in case of apostrophe it will create problem

let c = true; // Boolean literal
console.log(c);

let d = null; // Null literal
console.log(d);

let e = undefined; // Undefined literal
console.log(e);

let f = [1, 2, 3]; // Array literal
console.log(f);

let g = { name: "Tanvi", age: 20 }; // Object literal
console.log(g);


let i = 10n; // BigInt literal
console.log(i);

let j = Symbol("Tanvi"); // Symbol literal is used when we want to create unique value and it is not redeclareable
console.log(j);

let name = "Tanvi";
let full_name = `Hii , ${name} Yadav` // Template literal
console.log(full_name);

let math = `2+2=${2 + 2}`; // output 2+2=4
console.log(math);
