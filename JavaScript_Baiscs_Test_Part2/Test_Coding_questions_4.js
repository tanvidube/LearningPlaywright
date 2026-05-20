let ispresent = true;
let isEnabled = false;
let isDisplayed = false;

let STATUS;
let Severity;
let ACTION;

if (ispresent && isDisplayed && isEnabled === true) {
    STATUS = "READY"
    Severity = "OK"
} else if (ispresent && isDisplayed && !isEnabled) {
    STATUS = "DISABLE"
    Severity = "WARNING"
} else if (ispresent && !isDisplayed) {
    STATUS = "HIDDEN"
    Severity = "WARNING"
} else if (!ispresent) {
    STATUS = "NOT FOUND"
    Severity = "CRITICAL"
}

console.log("Status :", STATUS);
console.log("SEVERITY :", Severity)

