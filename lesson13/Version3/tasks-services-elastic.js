//curl -X PUT http://localhost:9200/tasks
//curl -X POST --data '{ "id" : 1 , "text" : "task 1 elastic" }' -H "Content-Type: application/json" http://localhost:9200/tasks/_doc
//curl -X POST --data '{ "id" : 2 , "text" : "task 2 elastic" }' -H "Content-Type: application/json" http://localhost:9200/tasks/_doc

const fetch = require('node-fetch')

module.exports = {
    getTasks: getTasks,
    addTask: addTask,
    getTaskById: getTaskById,
    updateTask: updateTask,
    deleteTask: deleteTask
}

function addTask(text){
    console.log("addTask")
}

function getTaskById(id){
    console.log("getTaskById")
}

function getTasks(){
    return fetch('http://localhost:9200/tasks/_search', {accept : "application/json"})
            .then(response => response.json())
            .then(body => body.hits.hits.map(t => t._source))
}

function updateTask(id, text){
    console.log("updateTask")
}

function deleteTask(id){
    console.log("deleteTask")
}