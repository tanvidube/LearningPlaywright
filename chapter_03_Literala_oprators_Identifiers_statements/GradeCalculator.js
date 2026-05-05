let grade;
let score = 1000;

if (typeof score !== "number") {
    console.log("score should be a vaid number");
    return;
}
if (score < 0 || score > 100) {
    console.log("Score should be within limit");
    return;
}

else if (score >= 90) {
    grade = 'A';
    console.log(grade);
}
else if (score >= 80) {
    grade = 'B';
    console.log(grade);
}
else if (score >= 70) {
    grade = 'C';
    console.log(grade);
}
else if (score >= 60) {
    grade = 'D';
    console.log(grade);
}
else if (score >= 50) {
    grade = 'E';
    console.log(grade);
}
else {
    grade = 'F';
    console.log(grade, "Fail");
}
