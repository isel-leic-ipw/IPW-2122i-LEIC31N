function longOperation(a) {

}


function longOperationAsyncWithCallback(a, cb) {

}

function longOperationAsyncWithPromise(a) {
    console.log("longOperationAsyncWithPromise")
}


function processResult0(result) {
    console.log("processResult0")
    return result*result
}

function processResult1(result) {
    console.log("processResult1")
    console.log(result)
}

// Sync model
let res = longOperation(10)
processResult1(res)


// Async model with callback
//longOperationA(10, res => processResult(res))
longOperationAsyncWithCallback(10, processResult1)

// Async model with Promise
  // Promise<Number>
//p.then(res => processResult(res))
longOperationAsyncWithPromise(10)
    .then(processResult0)                             // Promise<Number>
    .then(res => longOperationAsyncWithPromise(res))  // Promise<Promise<Number>>  => Promise<Number>
    .then(processResult1)                             // Promise<undefined> 
console.log("Nothing more to start doing")


