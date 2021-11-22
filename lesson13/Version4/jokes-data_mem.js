const jokes = [
    {id : 1, text : "joke1"},
    {id : 2, text : "joke2"}
]

let nextId = 3

module.exports = {
    getJokes : getJokes,
    getJokeByID : getJoke,
    updateJoke : updateJoke,
    createJoke : createJoke,
    deleteJoke : deleteJoke
}

function getJokes(){
    return Promise.resolve(jokes)
}

function getJoke(id){
    const joke = jokes.find(t => t.id == id)
    if(!joke) return Promise.reject("Not Found")
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
    console.log("deleteJoke")
}
