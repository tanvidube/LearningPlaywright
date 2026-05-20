const arr = [1, 2, 3];
arr.push(4)
console.log(arr)

/**for (let i = 0; i < 5; i++) { // we have defined i with let , we cannot print it outside of loop 
    if (i === 3) {
        break;
    }
} **/
console.log(i) //reference error

console.log(true + true);
console.log(0 || 'hello') //This prints 'hello' because || checks for any "falsy" value. In JavaScript, 0, "" (empty string), false, NaN, null, and undefined are all considered falsy. Since 0 is falsy, || moves on and returns the right side.

console.log(0 ?? 'hello') // If the left side is exactly null or undefined, it will return the right side (in this case, 'hello').

//For any other value on the left side, it will return that left-side value. Since 0 is a number (and neither null nor undefined), the operator simply returns 0.

