'use strict'

const express = require('express') 
const morgan = require('morgan') 
const passport = require('passport') 
const expressSession = require('express-session')

const app = express()

app.use(expressSession({secret: "Benfica campeão 2021/2022 ?"}))

app.use(morgan('dev'))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser(deserializeUser)


app.use('/auth', verifyAuthenticated)

app.get('/home', homeNotAuthenticated)
app.get('/auth/home', homeAuthenticated)

app.post('/login', validateLogin)
app.post('/logout', logout)


const PORT = 1904
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}/`))

function homeNotAuthenticated(req, rsp) {
  let user = req.user ? req.user.username : "unknown"
  rsp.end(`Everybody can reach  this endpoint. Hello ${user}`) 
}

function homeAuthenticated(req, rsp) {
  console.log("homeAuthenticated - ", req.user)
  rsp.end(`You can only reach here if you are authenticated. Hello ${req.user.username}`)
}

function serializeUser(user, done) {
  console.log("serializeUserCalled")
  console.log(user)
  //done(null, user.username)
  done(null, user)
}

function deserializeUser(user, done) {
  console.log("deserializeUserCalled")
  console.log(user)
  done(null, user)
  // done(null, {
  //   username: user,
  //   dummy: "dummy property on user"
  // })
}


function validateLogin(req, rsp) {
  console.log("validateLogin")
  if(validateUser(req.body.username, req.body.password)) {
    req.login({
      username: req.body.username,
      dummy: "dummy property on user"
    }, (err) => rsp.redirect('/auth/home'))
  }



  function validateUser(username, password) { return true }
}


function verifyAuthenticated(req, rsp, next) {
  console.log("verifyAuthenticated")
  if(req.user) {
    return next()
  }
  rsp.status(401).send("not authorized")
}
function logout(req, rsp) {
  req.logout()
  rsp.redirect('/home')
}

