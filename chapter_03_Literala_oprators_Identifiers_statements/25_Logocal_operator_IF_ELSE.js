let username = "Tanvi";
let password = "secure123";
let isAccountUnlocked = false;

//if ((username === "Tanvi" && password === "secure123") && isAccountUnlocked) { // && ko true hone ke liye dono side ki conditions true honi chahiye , isliye ye false ho raha hai
if ((username === "Tanvi" && password === "secure123") && !isAccountUnlocked) { // Ab ye Allowed to enter dega kyuki ab && ke dono side true condition hai

    console.log("Allowed to enter");
}

else {
    console.log("Not Allowed to enter");
}