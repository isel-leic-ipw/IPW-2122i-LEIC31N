// V1 - This file has EVERITHING (all responsabilities)!!!

const express = require('express')
const app = express()
const PORT = 1904
app.use(express.json())

// Configure CRUD routes to manage jokes 
app.get('/api/jokes', getJokes)           // Get all jokes
app.get('/api/jokes/:id', getJoke)        // Get a joke details
app.delete('/api/jokes/:id', deleteJoke)  // Delete a joke
app.put('/api/jokes/:id', updateJoke)     // Update a joke
app.post('/api/jokes', createJoke)        // Delete a joke

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))


function getJokes(req, resp){
    resp.json({message : "Get Jokes" })
}

function getJoke(req, resp){
    resp.json({message : "getJokeByID id = " + req.params.id })
}

function updateJoke(req, resp){
    resp.json({message : "updateJoke id = " + req.params.id })
}

function createJoke(req, resp){
    resp.json({message : "createJoke" })
}

function deleteJoke(req, resp){ 
    resp.json({message : "deleteJoke " })
}





