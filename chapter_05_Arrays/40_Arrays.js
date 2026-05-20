//Arrays are ordered collection of values
//In JS aarays are dynamic and can hold mixed values (hetrogeneous)
//let mixed = [1 , 'hello' , true , null];

let fruit = []; //empty array

let freshFruits = ['apple', 'banana', 'cherry'];
console.log(freshFruits[0]);
console.log(freshFruits[1]);
console.log(freshFruits[2]);
console.log(freshFruits[4]); //undefined
console.log(freshFruits.length);

//second method to create an array

let scores = new Array(3);
console.log(scores);
let scores2 = new Array(1, 2, 3);
console.log(scores2);

//Array from
let char = Array.from('hello');
console.log(char)

