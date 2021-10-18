function repeat(amount, task) {
    for(let i = 0; i < amount; ++i) {
        task(i+1)
    }    
} 


function filter(a, predicate) {
    let result = []
    repeat(a.length, testCurrentValue)

    return result

    function testCurrentValue(position) {
        let currValue = a[position-1]
        if(predicate(currValue, position-1, a)) {
            result.push(currValue)
        }
    }
}

let a = [1,2,3,4,10, 12, 15, 7, 9.4, 14, 9.5, 12]

console.log("PositiveGrades")
let positiveGrades = filter(a, e => e >= 9.5 )
console.log(positiveGrades)


console.log("Even numbers")
let evenNumbers = filter(a, e => e % 2 == 0 )
console.log(evenNumbers)


function map(a, prejection) {

}


console.log("Square Numbers")
let squareNumbers = map(a, e => e*e)
console.log(squareNumbers)


