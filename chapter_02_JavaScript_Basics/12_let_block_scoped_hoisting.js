let a = 'Tanvi';

if (true) {

    //console.log(a); //Cannot access 'a' before initialization , kyuki let block mai hi dekhta hai wo bahar se a ki value nahi uthaega (TDZ zone)
    let a = 'temp';
    console.log(a);
}