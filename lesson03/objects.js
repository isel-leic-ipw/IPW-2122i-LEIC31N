let o = { d : "O Maior", e : 20, g: { a: "SLB", b: 10, ' nome $ esquisito': function() {} } }

o.a = 10
o.b = "slb"
o.f = function() {}

console.log(o)

delete o.b

console.log(o)

// Using dot notation
console.log(o.a)
// Using subscript notation
console.log(o['a'])

let a = 10

console.log(o[a])


// let propName = getPropName()
// o[propName]
// o.propName

o[' a$very&strange()name"for*an identifier'] = 0
console.log(o)


