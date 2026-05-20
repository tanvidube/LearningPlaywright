//sorting()

let fruits = ['cherry', 'apple', 'banana']
console.log(fruits.sort())
//alphabatical order

let nums = [10, 1, 21, 2]
console.log(nums.sort()) // [1, 10 , 2 , 20 ] - Wrong (it caompares it as a string)

console.log(nums.sort((a, b) => a - b)) //ascending order (if a - b gives positive result , then it will swap)

console.log(nums.sort((a, b) => b - a)) //descending order (if b - a gives positive result , then it will swap)

