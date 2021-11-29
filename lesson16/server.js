const express = require('express')
const swaggerUi = require('swagger-ui-express');

// Using Json openAPI file
//const swaggerDocument = require('./docs/jokes-2.0.json');

// Using YAML openAPI file
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/jokes-api.yaml');

const app = express()
const PORT = 1904

const jokesData = require('./jokes-data_mem')
const jokesServices = require('./jokes-services')(jokesData)
const jokesApi = require('./jokes-api')(jokesServices)


app.use(express.json())

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Configure CRUD routes to manage jokes 
app.get('/api/jokes', jokesApi.getJokes)           // Get all jokes
app.get('/api/jokes/:id', jokesApi.getJoke)        // Get a joke details
app.delete('/api/jokes/:id', jokesApi.deleteJoke)  // Delete a joke
app.put('/api/jokes/:id', jokesApi.updateJoke)     // Update a joke
app.post('/api/jokes', jokesApi.createJoke)        // Delete a joke
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
