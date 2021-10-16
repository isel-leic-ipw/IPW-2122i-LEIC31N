function f(a = 2) {
    let x = 10
    // Do some stuff
    x = 20
    
    function f1() {
        console.log("I'm in f1")
        console.log("x is " + x++)

    }
    
    f1()
    return f1
}


let f2 = f();
f2()
f2()

let f3 = f();
f3()
f()