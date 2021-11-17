const express = require('express')
const app = express()
const PORT = 1904

app.use(express.json())

app.get('/api/tasks', function(req, res) {
    //res.set('Content-Type', 'text/plain')
    console.log(`Postman-Token: ${req.get('Postman-Token')}`)
    res.type('text/plain')
    res.status(499).send("Hello Benfica")
})


app.get('/api/tasks/:qq', function(req, res) {
    //res.set('Content-Type', 'text/plain')
    console.log(req.params.qq)
    console.log(req.query)
    res.status(499).send("Hello Benfica")
})

app.put('/', function(req, res) {
    console.log(`Content-Type: ${req.get('Content-Type')}`)
    console.log(req.body)
    res.send("PUT-Hello Benfica")
})

app.post('/', function(req, res) {
    res.send("POST-Hello Benfica")
    console.log(req.body)
})

app.delete('/', function(req, res) {
    res.send("DELETE-Hello Benfica")
})

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))



