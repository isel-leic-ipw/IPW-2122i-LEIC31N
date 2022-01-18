const crypto = require('crypto')
const errors = require('./errors')

const USERS = [
    { userId: '0b115b6e-8fcd-4b66-ac26-33392dcb9340', userName: 'User1', password: 'slb'}, 
    {userId: '3dfd8596-cfd3-431d-8e36-f0fc4c64f364', userName: 'User2', password: 'glorioso'}
]


const SIZE_JOKES = 5
 

const jokes = new Array(SIZE_JOKES).fill(undefined, 0, SIZE_JOKES)
            .map((_, idx) => { return  {id: idx+1, text: `joke${idx+1}`, userId: USERS[(idx%2)].userId} })


let nextId = jokes.length

module.exports = {
    getJokes : getJokes,
    getJoke : getJoke,
    updateJoke : updateJoke,
    createJoke : createJoke,
    deleteJoke : deleteJoke,
    getUserByUsername: getUserByUsername
}

function getJokes(searchText, skip = 0, limit = jokes.length){
    console.log(`${skip}-${limit}`)

    let retJokes = searchText ? jokes.filter(j => j.text.includes(searchText)) : jokes
    //retJokes = retJokes.slice(skip, skip+limit)
    return Promise.resolve(retJokes)
}

function getJoke(id){
    const joke = jokes.find(t => t.id == id)
    if(!joke) return Promise.reject(errors.NOT_FOUND)
    return Promise.resolve(joke)
}

function createJoke(text){
    const newId = nextId++
    const newJoke = {id : newId, text : text}
    jokes.push(newJoke)
    return Promise.resolve(newJoke)
    
}

function updateJoke(id, text){
    console.log("updateJoke")
}

function deleteJoke(id){ 
    const jokeIdx = jokes.findIndex(t => t.id == id)
    if(jokeIdx == -1)
        return Promise.reject(errors.NOT_FOUND)
    const joke = jokes[jokeIdx]
    jokes.splice(jokeIdx, 1)
    return Promise.resolve(joke)
}



async function getUserByUsername(username) {
    const user = USERS.find(user => user.userName == username)

    if(user)
        return user
    throw errors.INVALID_USERNAME
}
