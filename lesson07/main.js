const utils = require('./utils')
console.log("after 1st require")

utils.sayHello()


console.log("$$$$$$$$$$$$$$$$$$$$$$$$")


const utils1 = require('./utils')
console.log("after 2nd require")
utils1.sayHello()