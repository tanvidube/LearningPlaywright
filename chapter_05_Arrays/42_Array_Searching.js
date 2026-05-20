let results = ['pass', 'fail', 'pass', 'error', 'fail'];
//// index of ----> returns first index , or -1 if not found

console.log(results.indexOf('fail')) //1
console.log(results.indexOf('skip')) //-1

//// lastIndexof ---->returns the last index of a particular element
console.log(results.lastIndexOf('pass')) //2

//// includes ---> retuns boolean
console.log(results.includes('error')); //true

// find - returns first matching element

let nums = [10, 25, 30, 45];
console.log(nums.find(x => x > 20)); // 25

console.log(nums.findIndex(n => n < 30)) //0

console.log(nums.findLast(n => n < 30))//25
console.log(nums.findLastIndex(n => n < 30))//1




