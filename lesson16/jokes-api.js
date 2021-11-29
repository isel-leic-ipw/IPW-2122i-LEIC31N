// File rsponsibilities
// Have the functions that handle HTTP requests and 
// delegate all domain logic to jokes-services module

const jokesServices = require('./jokes-services')
const httpErrors = require('./http-errors')

module.exports = {
    getJokes: getJokes,
    getJoke: getJoke,
    createJoke: createJoke,
    deleteJoke: deleteJoke,
    updateJoke: updateJoke,
}


async function getJokes(req, rsp){
    // jokesServices.getJokes()
    //     .then(jokes => rsp.json(jokes))
    //     .catch( e => rsp.status(500).json({description: "Internal error occurred"}))

    try {
        const skip = req.query.skip ? undefined : Number(req.query.skip)
        const limit = req.query.limit ? undefined : Number(req.query.limit)
        let userId = req.get('Authorization').split(' ')[1]
        let jokes = await jokesServices.getJokes(userId, req.query.searchString, skip , limit)
        rsp.json(jokes)
    } catch(e) {
        rsp.status(500).json({description: "Internal error occurred"})
    }
}

function getJoke(req, rsp){
    jokesServices.getJoke(req.params.id)
        .then(joke => rsp.json(joke))
        .catch(e => processError(e, rsp))
}

function processError(aplErr, rsp) {
    const httpErr = httpErrors(aplErr)
    console.log(httpErr)
    rsp.status(httpErr.status).json(httpErr.body)


}

function createJoke(req, resp){
    jokesServices.createJoke(req.body.text)
        .then((newJoke)=>resp.status(201).json(newJoke))
        .catch((e)=>resp.status(500).json({message : `Server Error: ${e}`}))
}

function updateJoke(req, rsp){
    rsp.json({message : "updateJoke id = " + req.params.id })
}


function deleteJoke(req, rsp){ 
    rsp.json({message : "deleteJoke " })
}





