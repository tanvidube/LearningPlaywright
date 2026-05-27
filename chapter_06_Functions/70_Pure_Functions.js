// A pure function always returns the same output if the same input is given and it does not have any side-effects.

function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2); // fixed upto 2 decimal places

}

console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(10, 7));
