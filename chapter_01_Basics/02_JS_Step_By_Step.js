let a = 10;
console.log(a)
// Until this no TurboFan or profiler is required 

for (let a = 0; a < 1000000; a++) {

    console.log(a)


}
//but after the the loop  TurboFan will kick in and optimizes the code
// because this code is now a hotcode

//node --print-bytecode chapter_01_Basics\01_basics.js - this command is used to print the bytecode of the code
