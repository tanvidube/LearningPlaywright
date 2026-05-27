//Function declaration are moved to the top
//We can Call them before they are defined
//Function expressions and Arraow function are NOT

console.log(greet("Tanvi"));

function greet(name) {
    return `Hii ${name}`;
}


sayHi("Ankit")  //Cannot access 'sayHi' before initialization

const sayHi = function (name) { //const and let will not allow call before defination
    return `Hi , ${name}`
}
