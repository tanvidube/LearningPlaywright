let tests = ['login', 'checkout', 'search'];

// This a one way to iterate an array
for (i = 0; i < tests.length; i++) {

    console.log(tests[i])
}

//Second way to iterate an Array (for ...of)cleanest of values

for (let test of tests) {
    console.log(test)
}

//for each(no retrun value)

tests.forEach((tests, index) => {
    console.log(`${index} : ${tests}`)
})

//for in 

let students = ["John", "Cam", "Joe", "Manny"]

for (let student in students) {
    console.log(student, '', students[student])
}

