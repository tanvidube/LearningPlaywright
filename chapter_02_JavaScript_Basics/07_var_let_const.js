// var , let , const - these are used to declare variables

//var

var a = 10; // Global scoped

//Definition of function
function printHello() { //function scoped
    //function is a piece of code that can be reused
    console.log("Hello Tanvi");
    var a = 20;
    console.log(a);

    if (true) {

        var a = 30;
        console.log(a);
    }
    console.log('F -> ', a); //this will still print 30 because var is function scoped and not block scoped


}
//Calling of function
printHello();

//Var allows to redeclare and reassign
var b = 40;
console.log(b);
var b = 50;
console.log(b);
//But if we try to reassign let and const it will not allow

// let - Block scoped
let c = 20;
console.log(c);



function printHello() {
    console.log("Hello Tanvi");
    let c = 30; // Local scoped
    console.log(c);

    if (true) {
        let c = 40;
        console.log(c);
    }
    console.log('F -> ', c); // if ture will not be able to manipulate outside the if block
    // this value will remain 30
}
printHello();

//const - Block scoped and cannot be reassigned

const pi = 3.14;
console.log(pi);
// pi = 4.14;  // Reassignment is not allowed , constant value cannot be changed
// const pi = 5.14; // Redeclaration is not allowed , constant value cannot be redeclared

