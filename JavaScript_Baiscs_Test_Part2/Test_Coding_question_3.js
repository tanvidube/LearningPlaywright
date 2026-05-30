/*const MAX_ATTEMPT = 5;
let attemptNum = 0;
let isSccuess = true;
let i = 0;

do {
    attemptNum++;
    if (isSccuess) {
        console.log("Success , Response 200 Ok")
    }
    else {
        console.log("Failed , Timeout Error")
    }

} while (isSccuess && attemptNum < MAX_ATTEMPT) */

// Need to review later  , this might need Math.random   













// 



let k = 1;
let isResponse = false;

do {

    let tempVal = Math.random(0, 1);

    if (tempVal > 0.6) {
        isResponse = true;
        console.log("API IS SUCESS Status IS 200 ", tempVal)
    } else {
        isResponse = false;
        console.log("API IS FAILED ", "Retry", (k), "times", "tempValue", tempVal);
    }
    if (k == 5 && isResponse == false) {
        k = 0;
    }

    k++;




} while (k <= 5 && isResponse == false);