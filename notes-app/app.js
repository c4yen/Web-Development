const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
const { describe, demandOption } = require('yargs')

//Customize yargs version
yargs.version('1.1.0')


/**
 * Challenge: Add an option to yargs
 * 1. Setup a body option for the add command
 * 2. Config a description, make it requried, and for it to be a string
 * 3. Log the body value in the handler function
 * 4. Test your work!
 */

//add, remove, read, list

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ', argv.title)
        console.log('Body: ', argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function(){
        console.log('Lising the notes')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function(){
        console.log('Reading a note')
    }
})




yargs.parse()