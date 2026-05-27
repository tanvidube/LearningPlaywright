//Function is a peace of code which can be resued
// function name (param){  //definetion of function

//code that you want to execute

//}

//name(90); //Calling of function



let score;

function getScore(score){
    return score > 40 ? 'Pass' : 'Fail';
}

console.log(getScore(50)); //Pass
console.log(getScore(30)); //Fail