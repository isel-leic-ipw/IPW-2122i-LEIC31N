// File responsibilities
// Handle users management and logon sessions

const httpErrors = require('../http-errors')
const express = require('express')
const passport = require('passport') 



module.exports = function(app, jokesServices) {
    if(!jokesServices) 
        throw "Invalid argument for jokesData"

    // Passport initialization
    app.use(passport.initialize())
    app.use(passport.session())
    
    passport.serializeUser((user, done) => done(null, user))
    passport.deserializeUser((user, done) => done(null, user))
           
    const router = express.Router()

    router.get('/create', createUserForm) 
    router.post('/', createUser) 
    router.get('/login', loginForm) 
    router.post('/login', login) 
    router.post('/logout', logout) 

    
    return router

    function createUserForm(req, rsp) {
        rsp.end("createUserForm")
    }

    function createUser(req, rsp) {
        rsp.end("createUser")
    }

    function loginForm(req, rsp) {
        rsp.render("login")
    }

    async function login(req, rsp) {

        // jokesServices.validateCredentials(req.body.username, req.body.password)
        //     .then(user => req.login(user, (err) => rsp.redirect('/site/jokes')))
        //     .catch(err => rsp.render(login))

        try {
            const user = await jokesServices.validateCredentials(req.body.username, req.body.password)
            req.login(user, redirectToHome)
        } catch(err) {
            rsp.status(401).render('login', { username: req.body.username, message: 'Invalid credentials'})
        }

        return 

        function redirectToHome(err) {
            rsp.redirect('/site/jokes')
        }
    }

    function logout(req, rsp) {
        req.logout()
        rsp.redirect('/site/users/login')
    }
}


