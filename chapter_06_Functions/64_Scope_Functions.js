//Scope function

let env = "Staging";

function setupconfig() {
    let timeout = 3000;  //local scope
    console.log(env);  //can access globael 
    console.log(timeout) // can access local
}
setupconfig(); //3000 and staging

console.log(env);
//console.log(timeout); // Reference error - cannot access timeout out of the block (because let is block scoped)

//=======================================================================================\\

//Nested scope

function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x); //this is allow , because inner can access outer's varaible

    }
    inner();
    console.log(y); //this is NOT allow , because outer can  not access inner's varaible
}