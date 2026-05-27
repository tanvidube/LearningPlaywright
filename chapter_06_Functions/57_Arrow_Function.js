const greet = function (name){
    return `Namaste ${name}`
}
console.log(greet("Tanvi")) 

//Arrow function - same as normal function
//remoev the keyword function , remove the keyword return , remove curly braces and add =>
//Arrow function genrally only works when we have single condition    
const greet2 = name2 => `Namaste ${name2}`;
console.log(greet2("Tanvi"));

const doubleIt = n => n *2;
console.log(doubleIt(3));

//MultiLine - with curly braces

const result = score => {
    if (score > 40){
        return "pass";
    }
    return 'fail'
}
console.log(result(90))

//if statuscode is btw 200 && 300

const checkStatus = code => {
    if (code >=200 && code <=300){
        return "code is btw 200 - 300"
    }
    return "code is not in btw 200 - 300"

}
console.log(checkStatus(299))
