'use strict'

const express = require('express') 
const morgan = require('morgan') 
const cookieParser = require('cookie-parser') 

const app = express()

app.use(morgan('dev'))
app.use(cookieParser())


app.use('/resource1', res1)

app.get('/app/resource2', res2)


const PORT = 1904;
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}/`))



function res1(req, rsp) {
  rsp
    .cookie('name', 'tobi', { path: '/' })
    .cookie('surname', 'smith', { domain: "isel.pt", path: '/' })
    .end("Resource 1")
  
}

function res2(req, rsp) {

  console.log("Cookies received: ", req.headers.cookie)
  console.log("Cookies received: ", req.cookies)
  rsp.end("Resource 2")
}
