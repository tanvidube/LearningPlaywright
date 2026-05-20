//Modifying an array
let Status = ['pass', 'fail', 'skip'];
Status[1] = 'blocked';
console.log(Status)

//Adding and Removing
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

arr.pop() // remove one element from the last
console.log(arr);

//if we want to add something in front

let arr1 = [1, 2, 3, 4]
arr1.unshift(0);
console.log(arr1); //[0 , 1 , 2 , 3 , 4]

//arr1.shift()
console.log(arr1.shift()); // [1 , 2 , 3 , 4]
//console.log("Delted Num: ", delte_num);

//arr1.splice(1, 3, 99);
//console.log(arr1)

arr1.splice(1, 2, 10, 20)
console.log(arr1) //[1 , 10 , 20 , 4]

let marks = [10, 20, 30, 40]
console.log(marks.splice(-2, 2)) //this will delete  10 and 20

let marks1 = [10, 20, 30, 40]
console.log(marks1.splice(1, 2, 60))
console.log(marks1)





let browser = ['chrome', 'opera', 'firefox', 'safari'];
for (i = 0; i <= browser.length - 1; i++) {

    if (browser[i] === 'opera') {
        continue;
    }
    console.log(browser[i]);
}

