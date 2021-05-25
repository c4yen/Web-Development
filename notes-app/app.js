const notes = require('./notes.js')

const msg = notes()
console.log(msg);

/**
 * Challenge: Use the chalk library in your project
 * 1. Install chalk
 * 2. Load chalk into app.js
 * 3. Use it to print the string "Success!" to the console in green
 * 4. Test your work
 * 
 * Bonus: use docs to mess around with other styles. Make text bold and inversed.
 */

const chalk = require('chalk')
console.log(chalk.green('hello'))
console.log(chalk.bold.inverse('bonus: bold and inversed'))

