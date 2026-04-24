// hoisting - moving declarations to the top of the code

console.log(a);
var a = "Tanvi";
console.log(a);

//----------Phase1: Memory creation-----------

// var a = undefined  // This will be assigned to undefined at the time of creation of memory (iska matlab space ban jaati hai memory ke andar "a" naam ki)
// console.log (a) // Here javascript engine understand that we want to use "a" variable so it will automatically hoist it to the top of the code
// But it will still return undefined because it has not been assigned the value yet
// This is only applicable to var



//----------Phase2: Execution-----------

// At this stage , the code is executed line by line
// The value of 'a' is now 'Tanvi'

// Output:
// undefined
// Tanvi
