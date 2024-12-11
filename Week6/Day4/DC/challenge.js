const {greet} = require ('./greetings.js')
const {colorfulMessage} = require('./colorful-message.js')
const {readFile} = require ('./files/read-file.js')

console.log(greet ('Raquel'))
console.log(colorfulMessage())

readFile()