// File rsponsibilities
// Have the functions that handle HTTP requests and 
// delegate all domain logic to jokes-services module

const httpErrors = require('./http-errors')
const express = require('express')

module.exports = function(jokesServices) {
    if(!jokesServices) 
        throw "Invalid argument for jokesData"

    const router = express.Router()

    // HAMMER TIME: Middleware to insert an hardcoded user
    router.use(insertHammerUser) 
    router.get('/jokes', getJokes) 

    
    return router


    function insertHammerUser(req, rsp, next) {
        req.user = '0b115b6e-8fcd-4b66-ac26-33392dcb9340'
        next()
    }

    async function getJokes(req, rsp){
        // jokesServices.getJokes()
        //     .then(jokes => rsp.json(jokes))
        //     .catch( e => rsp.status(500).json({description: "Internal error occurred"}))
    
        let userId = req.user
        let jokes = await jokesServices.getJokes(userId)
        
        console.log(jokes)
        rsp.render('jokes', { title: 'All jokes', jokes: jokes.map((j, idx) =>  { return{ joke: j, beginRow: idx%2 == 0, endRow: idx%2 == 1 || idx == jokes.length-1}} )} )
    }
    

}


