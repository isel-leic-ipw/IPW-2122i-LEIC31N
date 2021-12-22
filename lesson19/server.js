const express = require('express')
const swaggerUi = require('swagger-ui-express')
var path = require('path')

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
const jokesSite = require('./jokes-web-site')(jokesServices)


app.use(express.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

// Configure CRUD routes to manage jokes 
app.use(dummy)
app.get('/api/jokes', jokesApi.getJokes)           // Get all jokes
app.get('/api/jokes/:id', jokesApi.getJoke)        // Get a joke details
app.delete('/api/jokes/:id', jokesApi.deleteJoke)  // Delete a joke
app.put('/api/jokes/:id', jokesApi.updateJoke)     // Update a joke
app.post('/api/jokes', jokesApi.createJoke)        // Delete a joke

//app.use('/api', jokesApi)           // Get all jokes
app.use('/', jokesSite)           

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))

function dummy(req, rsp, next) {
    console.log('Dummy called')
    next()

}
