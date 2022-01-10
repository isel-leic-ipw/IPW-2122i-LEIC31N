// File rsponsibilities
// Have the functions that handle HTTP requests and 
// delegate all domain logic to jokes-services module

const httpErrors = require('../http-errors')
const express = require('express')

module.exports = function(jokesServices) {
    if(!jokesServices) 
        throw "Invalid argument for jokesData"

    
    const router = express.Router()

    router.use(authorizationMw)

    router.get('/jokes', getJokes)           // Get all jokes
    router.get('/jokes/:id', getJoke)        // Get a joke details
    router.delete('/jokes/:id', deleteJoke)  // Delete a joke
    router.put('/jokes/:id', updateJoke)     // Update a joke
    router.post('/jokes', createJoke)        // Delete a joke
    
    return router


    function authorizationMw(req, rsp, next) {
        req.user = {
            userId: req.get('Authorization').split(' ')[1]
        }
        next()

    }

    async function getJokes(req, rsp, next){
        // jokesServices.getJokes()
        //     .then(jokes => rsp.json(jokes))
        //     .catch( e => rsp.status(500).json({description: "Internal error occurred"}))
    
        try {
            const skip = req.query.skip ? undefined : Number(req.query.skip)
            const limit = req.query.limit ? undefined : Number(req.query.limit)
            
            let userId = req.user.userId
            let jokes = await jokesServices.getJokes(userId, req.query.searchString, skip , limit)
            rsp.json(jokes)
        } catch(e) {
            console.log(e)
            rsp.status(500).json({description: "Internal error occurred"})
        }
        next()
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
}


