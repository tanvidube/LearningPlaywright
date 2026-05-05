/** let a = 15;

if (a % 3 === 0 && a % 5 !== 0) {
    console.log("Fizz!!!")
}
else if (a % 5 === 0 && a % 3 !== 0) {
    console.log("Buzz!!!")
}
else if (a % 3 === 0 && a % 5 === 0) {
    console.log("FizzBuzz!!!")
}
else {
    console.log("Not a multiple of three or five")
} **/

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i)
    }
}

