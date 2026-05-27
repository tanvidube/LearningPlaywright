function makeCounter(start = 0) {

    let count = start;

    /** function increament(){
         count++;
     }
      function decrement(){
         count--;
     }
      function get(){
         return count;
     } **/

    return {
        increament() {
            count++
        }, decrement() {
            count--;
        }, get() {
            return count;
        }
    }  // this all is same as above 


}
let counter = makeCounter(0);
counter.increament();  // this is clouser , as it is accessing count from outer scope even after makeCounter() is completed .
counter.increament();  //inner functions will always remember the outer variables.
counter.decrement();
console.log(counter.get());  //1

//------------------------------------------------------------------------------------\\

function makeRetryTracker(max) {
    let attempts = 0;


    return function tryagain(testName) { // here we are writing "function" because we have multi-line of code

        attempts++;
        if (attempts > max) {
            return `${testName} exceeded max retries (${max})`;

        }
        return `Attempts ${attempts}/${max} for ${testName}`

    }
}

let Retry = makeRetryTracker(3);
console.log(Retry("Login"));
console.log(Retry("Login"));
console.log(Retry("Login"));
console.log(Retry("Login"));


