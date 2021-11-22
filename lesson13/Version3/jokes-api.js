// File rsponsibilities
// Have the functions that handle HTTP requests and 
// delegate all domain logic to jokes-services module

const jokesServices = require('./jokes-services_mem')

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
        let jokes = await jokesServices.getJokes()
        rsp.json(jokes)
    } catch(e) {
        rsp.status(500).json({description: "Internal error occurred"})
    }
}

function getJoke(req, rsp){
    jokesServices.getJoke(req.params.id)
        .then(joke => rsp.json(joke))
        .catch( e => rsp.status(500).json(e))
}

function createJoke(req, resp){
    jokesServices.createJoke(req.body.text)
        .then((newJoke)=>resp.status(201).json(newJoke))
        .catch(()=>resp.status(500).json({message : "Server Error"}))
}

function updateJoke(req, rsp){
    rsp.json({message : "updateJoke id = " + req.params.id })
}


function deleteJoke(req, rsp){ 
    rsp.json({message : "deleteJoke " })
}





