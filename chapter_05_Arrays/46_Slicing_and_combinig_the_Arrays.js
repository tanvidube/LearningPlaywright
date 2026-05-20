let arr = [1, 2, 3, 4, 5]

console.log(arr.slice(1, 3)) // first index to end-1 index //[2, 3]

console.log(arr.slice(-2)) // Till -2 index //[4, 5]

console.log(arr.slice(2)) // if we don't mention the end , it will inclue end index as well // [ 3, 4 , 5]

console.log(arr.slice(2, 5)) // no out of bound exception , it will print till the last

let char = Array.from("Hello")
console.log(char[0])

let arr1 = new Array(1, 2, 3, 4);
console.log(arr1);
console.log(arr1[4]);

console.log("-------------------//----------------------")

//Combining the Arrays
let a = [1, 2];
let b = [3, 4];

let c = a.concat(b, [5, 6]);
console.log(c);

let c1 = a.concat(b)
console.log(c1)

//spread...way
let d = [...a, ...b]
console.log(d)

//join
let s = ["pass", "fail", "skip"].join("+") //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(s)


