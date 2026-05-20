let statuscode = 401;
let result;
switch (statuscode) {
    case 200:
        result = "PASS - OK: Request successful "
        break;

    case 201:
        result = "PASS - Created: Resource created successfully"
        break;
    case 301:
        result = "WARNING - Moved Permanently: URL has changed"
        break;

    case 400:
        result = "FAIL - Bad Request: Check request payload"
        break;

    case 401:
        result = "FAIL - Unauthorized: Check auth token"
        break;

    default:
        result = "UNKNOWN - Unhandled status code"
}
console.log("Status Code", statuscode)
console.log("Result", result)



