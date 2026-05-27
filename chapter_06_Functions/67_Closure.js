//A closure is when a function remembers variables from its outer scope even after the outer function has finished executing

function outer() {
    let message = "hello";
    console.log("outer called!!!")

    function inner() {
        console.log(message)
        console.log("inner called!!!")
    }
    return inner; //closure says that we can return function from another function .
}

outer();

let fn_inner = outer();  // outer is completed here , but still inner() has access to message
fn_inner(); // here inner is called and message is remembered , even after outer() is finished.


