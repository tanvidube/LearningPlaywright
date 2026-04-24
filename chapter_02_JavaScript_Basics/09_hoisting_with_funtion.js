function getUsersatatus() {

    console.log(status);
    var status = "Active";
    console.log(status);


}

getUsersatatus()

// var is not function-scoped so status is getting hoisted to the top of getUserStatus function , NOT the global scope
