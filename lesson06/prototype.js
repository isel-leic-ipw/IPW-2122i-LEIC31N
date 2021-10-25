let o = new Object() // {}
let a = new Array()  // []

Array.prototype.foo = 10
let a1 = []

console.log(a.foo)
console.log(a1.foo)

a.foo = "ABC"

console.log(a.foo)
console.log(a1.foo)

String.prototype.enclose = function(encloseStr) {
    if(!encloseStr) {
        return this.toString()
    }
    return `${encloseStr}(${this})${encloseStr}`
}

let s = "Glorioso"

let s1 = s.enclose("SLB") // SLB Glorioso SLB
console.log(s1)


/// Tests 

function shouldEncloseWithNonEmptyString() {
    // Arrange

    // Act
    let s1 = "Glorioso".enclose("SLB")
    
    // Assert
    console.assert(s1 === "SLB(Glorioso)SLB", "shouldEncloseWithNonEmptyString")
}

function shouldEncloseWithEmptyString() {
    // Arrange


    let s = "Glorioso"
    // Act
    let s1 = s.enclose("")
    
    // Assert
    // console.assert(s1 === s, "String is not equal to the expected")
    // console.assert(compare(s,s1), "String is not equal to the expected")
}


shouldEncloseWithNonEmptyString()
shouldEncloseWithEmptyString()


function compare(o1, o2) {
    Object.entries(o1).toString() === Object.entries(o1).toString(o2) 
}
