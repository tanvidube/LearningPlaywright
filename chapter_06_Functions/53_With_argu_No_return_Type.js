function greetByName(name){ //name is the parameter
    console.log("Hii" , name) // this will not print anything , unless we call the function
}

greetByName("Tanvi"); 

let name = greetByName("Tanvi");
console.log(name); //undefined (they don't return anything)


//=================================================================\\

function logtest(name){
    console.log(`Running: ${name}`);
}
let result = logtest("login");
console.log(result) //this will be undifiend because we are not returning anything