function repeat(repetitions, action)  {
    for (let i = 0; i < repetitions; i++) {
        action(i+1)
    }
}

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
repeat(10, repetitionCount => console.log(repetitionCount-1))


// for (let total = 0; count <= 23; ) {
// //let total = 0, count = 1;
// //while (count <= 23) {
//   total + count;
//   count += 1;
// }
//console.log(total);

let total = 0
repeat(23, repetitionCount => { total += repetitionCount})
console.log("total: "+ total)

// ---------------------

function power(number, pow) {
    let result = 1
    repeat(pow, i => result *= number)
    return result
}

function powerGenerator(pow) {
    return number => power(number, pow)
}

const power10 = powerGenerator(10)
console.log(power10(2))
console.log(power10(3))
console.log(power10(5))


const power15 = powerGenerator(15)
console.log(power15(2))
console.log(power15(2))
console.log(power15(3))
