const validator = require('validator')
const notes = require('./notes.js')

const msg = notes()
console.log(msg);

console.log(validator.isURL('https://example.com'))


