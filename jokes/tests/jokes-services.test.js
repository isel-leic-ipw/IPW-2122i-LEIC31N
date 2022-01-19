const USER1 = '0b115b6e-8fcd-4b66-ac26-33392dcb9340'
const INVALID_USER = 100


const jokesData = {
    getJokes: async function(userId) {
        return [
            {
                id:1,
                text: "joke1",
                userId: USER1
            },
            {
                id:2,
                text: "joke2",
                userId: USER1
            }
        ]

    }
}
const services = require('../jokes-services.js')(jokesData)


describe('Get All Jokes', () => {
    test('For a valid user', () => {
        return services.getJokes(USER1)
        .then(jokes => {
            expect(jokes).toHaveLength(2)
            
        })
    })

    test('For a non existing user', () => {

    })

    test('For an invalid userId', () => {
        return services.getJokes(INVALID_USER).invert()
                    .then(error => {
                        expect(error).toBe("Invalid user Id")
                    })
    })

    test('With no user', () => {

    })
})


Promise.prototype.invert = function invert() {
    return new Promise((resolve, reject) => {
        this.then(val => reject(val)).catch(err => resolve(err))
        
    })
}
