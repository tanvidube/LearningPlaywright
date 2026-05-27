function sum(a, b, c) {
    return a + b + c;

}
let num = [1, 2, 3];
console.log(sum(...num)); // we can pass this directly in the function


//=====================================================================\\

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
let ErrorCodes = [200, 300, 404];
console.log(hasError(...ErrorCodes)); //true