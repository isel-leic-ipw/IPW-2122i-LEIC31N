// File responsibilities
// 1 - Configure the server
// 2 - Launch the server and wait for requests

const express = require('express')
const app = express()
const PORT = 1904
const jokesApi = require('./jokes-api')
app.use(express.json())



// Configure CRUD routes to manage jokes 
app.get('/api/jokes', jokesApi.getJokes)           // Get all jokes
app.get('/api/jokes/:id', jokesApi.getJoke)        // Get a joke details
app.delete('/api/jokes/:id', jokesApi.deleteJoke)  // Delete a joke
app.put('/api/jokes/:id', jokesApi.updateJoke)     // Update a joke
app.post('/api/jokes', jokesApi.createJoke)        // Delete a joke

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))

