//isArray checks if the givien argument is Array por not , retuens - true , false
let result = Array.isArray([1, 2, 3]);
console.log(result);

let a = Array.isArray('Tanvi');
console.log(a);

//every - Determines whether all the members of an array satisfy the specified test.
let r = [80, 90, 95].every(s => s > 70)
console.log(r)

//some - Determines whether the specified callback function returns true for any element of an array.
let r1 = [80, 50, 95].some(s => s > 70)
console.log(r1)


