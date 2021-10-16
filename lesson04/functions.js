

// Anonymous function
let f = function() {

}

f.greatest = "SLB" 

// Named function
function namedFunction() {
    console.log("Named Function")
}

console.log(nf.name)
nf()
namedFunction = 123
//namedFunction()

const makeNoise = function(a) {
    console.log("Pling! " + a);
    return 10
}

let ret = makeNoise()
console.log(ret)

makeNoise(1,2,3, "abc", {})


function max(a, b) {
    return a > b ? a : b
}

function maxUnbound(...a) {
    //let a = arguments
    if(a.length == 0) {
        return NaN
    }
    let max = a[0]
    for(let i = 1; i < a.length; ++i) {
        if(max < a[i]) {
            max = a[i]
        }
    }
    return max
}


console.log(max(2,3))
console.log(max(10,4))

console.log("------------ MaxUnbounded ------------ ")
console.log(maxUnbound())
console.log(maxUnbound(10))
console.log(maxUnbound(10,4,5))
console.log(maxUnbound(20,10,4,100, -3))
console.log(maxUnbound(-1,-2,-3,-4,-5))


// Default values
console.log("------------ Default values ------------ ")
function f1(a = 10, b = 11, c = 12) {
    console.log(a)
    console.log(b)
    console.log(c)
}

f1()
f1(1)
f1(1,2)
f1(2,undefined, 3)


console.log("------------ Bindings and scopes ------------ ")


let global = "GLOBAL"

function f2(a) {
    let b = 123
    if(a > 5) {
        let c = 1
        {
            let a = 2
            let d = 3
            console.log(a)
            console.log(d)
        }
    }

    //console.log(c)
}

f2()

{
    let a = 123
}

// Arrow function

let m = (a, b) => a > b ? a : b

