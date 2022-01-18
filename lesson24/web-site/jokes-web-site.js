// File rsponsibilities
// Have the functions that handle HTTP requests and 
// delegate all domain logic to jokes-services module

const httpErrors = require('../http-errors')
const express = require('express')
const { response } = require('express')

module.exports = function(jokesServices) {
    if(!jokesServices) 
        throw "Invalid argument for jokesData"

    const router = express.Router()

    router.get('/', getJokes) 
    router.get('/new', newJoke) 
    router.post('/', createJoke) 
    router.get('/:id', getJoke) 

    
    return router



    async function getJokes(req, res){
        try {
            let userId = req.user.userId
            
            let jokes = await jokesServices.getJokes(userId)
            
            res.render('jokes', { username: req.user.userName, title: 'All jokes', jokes: jokes.map((j, idx) =>  { return{ joke: j, beginRow: idx%2 == 0, endRow: idx%2 == 1 || idx == jokes.length-1}} )} )
        } catch(err)  {
            console.log(err)
            res.redirect('/site/users/login')
        }
    }

    async function getJoke(req, res){
        let joke = await jokesServices.getJoke(req.params.id)
        res.render('joke', joke)

    }

    async function newJoke(req, res){
        res.render('newJoke')
           
    }

    async function createJoke(req, res){
        console.log(req.body)
        let newJoke = await jokesServices.createJoke(req.body.text)
        res.redirect(`/jokes/${newJoke.id}`)
           
    }
    

}


