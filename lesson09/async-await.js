const fetch = require('node-fetch')

async function dummy() {
    return 0
    //return Promise.resolve(0)
}

async function getResponseSize(url) {
    // fetch(url)
    //     .then(rsp => rsp.text())
    //     .then(text => text.length) 

    let response = await fetch(url)
    let text = await response.text()
    return text.length
}


console.log(dummy())

async function xpto() {
    let res = getResponseSize('https://eloquentjavascript.net/11_async.html')
                .then(len => console.log(len))

    let res1 = await getResponseSize('https://eloquentjavascript.net/11_async.html')
            
}
xpto()


console.log("nothing mote to do")