let responseCode = 200;

switch (responseCode) {
    case 200:
        console.log("Success");
        break;
    case 404:
        console.log("Not found");
        break;
    case 500:
        console.log("Internal server error");
        break;
    default:
        console.log("Not a valid response code");
        break;

}