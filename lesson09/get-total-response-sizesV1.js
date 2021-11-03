const fetch1 = require('node-fetch')

function fetch(url) {
    console.log(`Making request to ${url}`)
    return fetch1(url)
}


function getResponseText(rsp) {
    console.log(`Response received for ${rsp.url}`)
    return rsp.text()
}

function resultToBodySizePromise(pResult) {
    return pResult                            // Promise<Result>
    .then(getResponseText) // Promise<String>
    .then(text => text.length)
}

function getResponseSizePromise(url) {
    return fetch(url)
        .then(getResponseText) 
        .then(text => text.length)
}


function twoNumberToSumPromise(np1, np2) {
    
    //return np1.then(size1 => np2.then(size2 => size1 + size2))    

    return np1.then(
        size1 => { 
            console.log(`size1 ${size1}`) 
            return np2.then(size2 => 
                { 
                    console.log(`size2 ${size2}`);
                    return size1 + size2
                }) 
        })    
}

function sumResponseSizes(...urls) {   // Promise<Number>
    //urls.map(url => fetch(url))
    let promises = urls.map(url => fetch(url)) // [Promise<Result>]

    let promise = resultToBodySizePromise(promises[0])

    for(let i = 1; i < promises.length; ++i) {
        // let currPromiseSize = resultToBodySizePromise(promises[i])
        // promise = twoNumberToSumPromise(promise, currPromiseSize)
        promise = twoNumberToSumPromise(promise, resultToBodySizePromise(promises[i]))
    }
    return promise
}



function sumResponseSizes1(...urls) {   // Promise<Number>
    //urls.map(url => fetch(url))
    return  urls
                .map(url => fetch(url))                      // Promise<Result>[]
                //.map(pRes => resultToBodySizePromise(pRes)) // Promise<Result>
                .map(resultToBodySizePromise) // Promise<Number>[]
                //.reduce((pSum, pCurr) => twoNumberToSumPromise(pSum, pCurr))
                .reduce(twoNumberToSumPromise)
}



function sumResponseSizes2(...urls) {   // Promise<Number>
    return  urls.reduce((pacc, url) => pacc.then(acc => getResponseSizePromise(url).then(size => acc + size)), Promise.resolve(0))
}


// Sequential asynchronous requests
async function sumResponseSizes3(...urls) {   
    let sum = 0
    for(let i = 0; i < urls.length; ++i) {
        let rsp = await fetch(urls[i])
        let text = await rsp.text()
        console.log(`Adding ${text.length} to ${sum}`)
        sum += text.length 
    }
    return sum
}

async function sumResponseSizes4(...urls) {   
    let promises = urls.map(url => fetch(url))
    
    let sum = 0
    for(let i = 0; i < promises.length; ++i) {
        let rsp = await promises[i]
        let text = await rsp.text()
        console.log(`Adding ${text.length} to ${sum}`)
        sum += text.length 
    }
    return sum
}

async function sumResponseSizes5(...urls) {   
    return  urls
                .map(url => fetch(url))                      // Promise<Result>[]
                .map(async pRes => (await (await pRes).text()).length) // Promise<Number>[]
                //.reduce((pSum, pCurr) => twoNumberToSumPromise(pSum, pCurr))
                .reduce(async (acc, curr) => await acc + await curr)        
}


sumResponseSizes2('https://eloquentjavascript.net/11_async.html', 'https://eloquentjavascript.net/11_async.html')
    .then(console.log)

console.log("Request initiated. Now I have nothing more to do")