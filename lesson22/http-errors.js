

module.exports = function(err) {
    if(err.code = 1000) {
        return {status: 400, body: err.text}
    }

    if(err.code = 1001) {
        return {status: 404, body: err.text}
    }

    return {status: 500, body: 'Unknown error'}
} 