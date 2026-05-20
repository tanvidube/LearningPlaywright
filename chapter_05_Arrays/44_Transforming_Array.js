let score = [45, 60, 73, 85, 50, 90]

//map - transforms every element , returns NEW Array

let grades = score.map(s => s > 70 ? 'Pass' : 'Fail')
console.log(grades)

//filter - Keeps elemets that pass a test

let passing = score.filter(s => s > 70)
console.log(passing)

//reduce - accumulates to a single value

let total = score.reduce((sum, s) => sum + s, 0);
console.log(total)

//flat() - flattend nested array

let nested = [[1, 2], [3, 4], [5, 6]]
console.log(nested.flat())
