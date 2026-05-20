const testresults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
let passcount = 0;
let failcount = 0;
let skipcount = 0;


for (let i = 0; i <= testresults.length; i++) {
    if (testresults[i] === "pass") {
        passcount++;
    }
    else if (testresults[i] === "fail") {
        failcount++;
    }
    else if (testresults[i] === "skip") {
        skipcount++;
    }
}

const Total_Tests = testresults.length;

console.log("===============TestMetrics===================")
console.log("Passed =", passcount)
console.log("Failed =", failcount)
console.log("Skiped =", skipcount)
console.log("Pass Precentage", ((passcount / Total_Tests) * 100))
console.log("==============================================")



if (failcount === 0) {
    console.log("all passed → ready for release")
}
else if (failcount <= 2) {
    console.log("VERDICT: Minor failures. Review before release.")
}
else
    console.log("VERDICT: block release")


