let CLIENT_ID = process.env.ATLAS_CLIENT_ID
const BOARD_GAME_ATLAS = `https://api.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=${CLIENT_ID}&limit=100`

let fs = require('fs/promises')
let fetch = require('node-fetch')

fetch(BOARD_GAME_ATLAS)
    .then(res => res.json())
    .then(processGames)


function processGames(g) {
    let ids = g.games
        .map(game => game.id)
        .reduce((acc, curr) => `${acc}\n${curr}`)

    fs.writeFile('ids.txt', ids)
        .then(() => console.log("File with ids created"))
    
}


