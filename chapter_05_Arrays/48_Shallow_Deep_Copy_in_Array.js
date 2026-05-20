let original = [1, 2, 3, 4]

let copy1 = [...original]
console.log(copy1)

let copy2 = original.slice()
console.log(copy2)

let copy3 = Array.from(original)
console.log(copy3)

let copy4 = original.concat()
console.log(copy4)

console.log("----------------------------------------------------------")

copy1.push(99)
console.log(original) //Nothing will chnage in original
console.log(copy1) //but copy1 will change

original.push(100)
console.log(copy1) //copy1 will not change because it is a shallow copy of original
console.log(original)