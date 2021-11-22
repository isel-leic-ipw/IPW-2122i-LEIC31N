// File rsponsibilities
// Have the functions that handle HTTP requests

module.exports = {
    getJokes: getJokes,
    getJoke: getJoke,
    createJoke: createJoke,
    deleteJoke: deleteJoke,
    updateJoke: updateJoke,
}


function getJokes(req, rsp){
    rsp.json({message : "Get Jokes" })
}

function getJoke(req, rsp){
    rsp.json({message : "getJokeByID id = " + req.params.id })
}

function updateJoke(req, rsp){
    rsp.json({message : "updateJoke id = " + req.params.id })
}

function createJoke(req, rsp){
    rsp.json({message : "createJoke" })
}

function deleteJoke(req, rsp){ 
    rsp.json({message : "deleteJoke " })
}





