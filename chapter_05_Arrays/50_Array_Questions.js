let APIresponse = [200, 201, 404, 500, 404, 200, 503];
/**for(i = 0 ; i<APIresponse.length ; i++){
    if(APIresponse[i] < 300){
        console.log(APIresponse[i] ,  "All responses are successful")
    }
}**/

/**let SuccessCode = APIresponse.map(x => x<300 ? 'Sccuess' : 'Failuer') 
console.log(SuccessCode)**/

//-----------------unique error codes-------------------------------//

//console.log(APIresponse.filter(x => x > 299)); 

//------------print first non-success code----------------//

for (i = 0; i < APIresponse.length; i++) {
    if (APIresponse[i] > 299) {
        console.log(APIresponse[i], "First non-sccess code")
        break;
    }

}

//-----------------Question 2 ----------------------------------------------//

let responsesTimes = [320, 85, 1200, 450, 99];
let sorted = responsesTimes.sort((a, b) => a - b);
console.log('Fastest', sorted[0])

//-------------------Question 3 --------------------------------------------//

let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail"
console.log(suite1[0].status); //We should be creating a deep copy , because in this case changes on suite2 are affecting suite1


//--------------------------------------------------------------

const arr = [1, 2, 3];
const copy = arr;
copy.push(4);

console.log(arr);




