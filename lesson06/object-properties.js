function showObject(obj) {
    let str = ""
    // for(const name in obj) {
    //     //console.log(name + '= ' + obj[name])
    //     str += `${name}= ${obj[name]}\n`
    // }
    // console.log(str)
    console.log(Object
                .getOwnPropertyNames(obj)
                .reduce((acc, curr) => acc +`${curr}= ${obj[curr]}\n`, "")
    )
    
}

const obj = {a: 1, b: "SLB", c: [1,2,3]}
showObject(obj)


let str = "Benfica"
showObject(str)

let a = [1,2,3,4,5]

showObject(a)



