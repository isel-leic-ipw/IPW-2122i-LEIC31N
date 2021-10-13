//let a = [1,2,3,4,5]
let a = [1,2,3,4,5]
let o = {'0': 1, '1': 2, '2': 3, '3': 4, '4': 5}

o['0'] = 1

console.log(a[0])
console.log(a.length)
console.log(o.length)


a[123] = 123
console.log(a.length)
a["1456"] = "123"
a["a1457"] = "123"
console.log(a.length)
console.log(a)

console.log(a[123])
a.length = 3
console.log(a[123])
console.log(a)
