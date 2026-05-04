let a = 9
let b = 11
let c = 10


if (a !== b && b !== c && a !== c) {
    console.log("This is an scalean triangle")
}
else if (a === b && a !== c) {
    console.log("This is an isosceles triangle")
}
else if (a === b && b === c) {
    console.log("This is an equilateral triangle")
}

