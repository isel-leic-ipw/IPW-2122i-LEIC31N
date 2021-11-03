let CLIENT_ID = process.env.ATLAS_CLIENT_ID
const BOARD_GAME_ATLAS = `https://api.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=${CLIENT_ID}&limit=100`

const obj = require('./games.json')
console.log(obj)
console.log("-------------------------")
console.log(JSON.stringify(obj))

let fs = require('fs/promises')

fs.readFile('./ids.txt')
    .then(processFileContents)
    



function processFileContents(buffer) {
    let ids = new String(buffer).split('\n')
    ids.forEach(id => console.log(id))
}
