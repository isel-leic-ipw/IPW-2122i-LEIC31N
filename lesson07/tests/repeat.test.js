const repeat = require('../utils').repeat

test('test repeat with a positive number', () => {
    // Arrange

    // Act and Assert
    countRepetitions(5)
})


test('test repeat with zero repetitions', () => {
    countRepetitions(0)
})

test('test repeat with a negative repetitions', () => {
    // try {
    //     repeat(-1, _ => ++count)
    // } catch(e) {
    //     return
    // }
    // expect(true).toBeFalsy()
    expect(() => repeat(-1)).toThrow()

    
})

function countRepetitions(repetitions) {
    let count = 0
    // Act
    repeat(repetitions, _ => ++count)

    // Assert
    expect(count).toBe(repetitions)
}