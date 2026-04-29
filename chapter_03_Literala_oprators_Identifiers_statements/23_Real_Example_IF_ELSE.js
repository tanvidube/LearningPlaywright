let isloggedin = true;
let userRole = "";




if (isloggedin && userRole === 'editor') {
    console.log("Welcome Editor");

}
else if (isloggedin && userRole === 'admin') {
    console.log("Welcome admin");

}
else if (isloggedin && userRole === 'veiwer') {
    console.log("Welcome veiwer");

}
else {
    console.log("Not suer which user it is!!");
}
