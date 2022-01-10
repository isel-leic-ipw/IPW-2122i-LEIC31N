const errors = require('./errors')

module.exports = function (jokesData) {
    if(!jokesData) 
        throw "Invalid argument for jokesData"
    
    return { 
        getJokes : getJokes,
        getJoke : getJoke,
        updateJoke : updateJoke,
        createJoke : createJoke,
        deleteJoke : deleteJoke
    }


    async function getJokes(userId, searchText, skip, limit){
        if(userId.constructor != String)
            return Promise.reject("Invalid user Id")
        return jokesData.getJokes(searchText,skip, limit)
                //.then(jokes => jokes.filter(j => j.userId == userId))
    }
    
    async function getJoke(id){
        if(!(Number(id))) 
            return Promise.reject(errors.INVALID_ID)
        return jokesData.getJoke(id)
    }
    
    async function createJoke(text){
        return jokesData.createJoke(text)
    }
    
    async function updateJoke(id, text){
        console.log("updateJoke")
    }
    
    async function deleteJoke(id){ 
        console.log("deleteJoke")
    }
    
}

