const fetch = require('node-fetch')


function processResponse(text) {
    console.log(text.length)

}

function peek(val) {
    console.log(`peeking value: ${val}`)
    return val
}

function responseToSizePromise(rspP) {
    return rspP.then(rsp => rsp.text()) // Promise<String>
        //.then(peek)
        .then(text => text.length)      // Promise<Number>
        //.then(peek)
}

function twoPromiseNumbersToOnePromiseNumberWithSum(pn1, pn2) {
    return pn1.then(v1 => pn2.then(v2 => v1 + v2))
}


fetch('https://eloquentjavascript.net/11_async.html')   // Promise<Result>
    .then(rsp => rsp.text())                            // Promise<String>
    .then(text => text.length)                          // Promise<Number>
    .then(console.log)

// responseToNumberPromise(fetch('https://eloquentjavascript.net/11_async.html')) 
//     .then(console.log)


// function sumResponseSize(...urls) { // Promise<Number>
//     return urls.map(url => fetch(url))                        // Promise<Response>[]
//         .map(pRsp => responseToSizePromise(pRsp))    // Promise<Number>[] 
//         .reduce((acc, curr) => twoPromiseNumbersToOnePromiseNumberWithSum(acc, curr))
// }

function sumResponseSize(...urls) { // Promise<Number>
    return urls.map(fetch)                        // Promise<Response>[]
        .map(responseToSizePromise)    // Promise<Number>[] 
        .reduce(twoPromiseNumbersToOnePromiseNumberWithSum)
}

//sumResponseSize(['https://eloquentjavascript.net/11_async.html', 'https://eloquentjavascript.net/11_async.html'])
sumResponseSize('https://eloquentjavascript.net/11_async.html', 'https://eloquentjavascript.net/11_async.html')
    .then(total => console.log(`####### ${total}`))


console.log('Nothing more to do')