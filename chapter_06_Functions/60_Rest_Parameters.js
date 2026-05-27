function logResults(suiteName , ...results){
    console.log(`suite:  ${suiteName}`)
    console.log(`results  ${results.join(" , ")}`)
}
logResults("Auth Suite" , "pass" , "fail" , "pass" , "skip")



