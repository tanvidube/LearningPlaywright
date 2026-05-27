function retry (testName , MAXRetirs = 3 , Delays = 1000 ){
    return `Retrying ${testName} up to ${MAXRetirs} times , delays ${Delays} ms apart`;

}

retry("Login")
retry("Trying up to" , 5)
retry("Delay time" , 300)