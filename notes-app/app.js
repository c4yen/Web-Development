const notes = require('./notes.js')
const yargs = require('yargs')
const { describe, demandOption } = require('yargs')

//Customize yargs version
yargs.version('1.1.0')

//add, remove, read, list

/**
 * Challenge Setup Command Option and functin
 * 1. Setup the remove command to take a required "--title" option
 * 2. Create and export a removeNote function from notes.js
 * 3. Call removeNote in remove command handler
 * 4. Have removeNote log the title of the note to be removed
 * 5. Test your work using: node app.js remove --title="some title"
 * 6. Load existing notes
 * 7. Use array filter method to remove the matching note (if any)
 * 8. Save your newly created array
 * 9. Test your work with a title that exists and a title that doesn't exist
 */

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
        notes.addNotes(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
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