const jokes = new Array(100).fill(undefined, 0, 100)
            .map((_, idx) => { return  {id: idx+1, text: `joke${idx+1}`, userId: (idx%2+1)} })


let nextId = 3

module.exports = {
    getJokes : getJokes,
    getJokeByID : getJoke,
    updateJoke : updateJoke,
    createJoke : createJoke,
    deleteJoke : deleteJoke
}

function getJokes(searchText, skip = 0, limit = jokes.length){
    console.log(`${skip}-${limit}`)

    let retJokes = searchText ? jokes.filter(j => j.text.includes(searchText)) : jokes
    //retJokes = retJokes.slice(skip, skip+limit)
    return Promise.resolve(retJokes)
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

