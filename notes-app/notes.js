const fs = require('fs')
const chalk = require('chalk')

const getNotes = function (){
    return 'Your notes...'
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (notes) {
        return notes.title === title
    })

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        
        console.log(chalk.bgGreen("Notes added"))
    }else{
        console.log(chalk.bgGRed("Notes title was taken"))
    }

}

const removeNote = function(title){
    const notes = loadNotes()

    // Find all elements except the element with our title
    const UpdatedList = notes.filter(function(notes){
        return notes.title !== title
    })

    if (notes.length > UpdatedList.length){
        saveNotes(UpdatedList)
        console.log(chalk.bgGreen("Notes " + title + " was removed."))
    }else{
        console.log(chalk.bgRed("Notes " + title + " was not found."))
    }
    
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        //TODO
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNotes: removeNote
}