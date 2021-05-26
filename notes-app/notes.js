const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((notes) => notes.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        
        console.log(chalk.bgGreen("Notes added"))
    }else{
        console.log(chalk.bgRed("Notes title was taken"))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()

    // Find all elements except the element with our title
    const UpdatedList = notes.filter((notes) => notes.title !== title)

    if (notes.length > UpdatedList.length){
        saveNotes(UpdatedList)
        console.log(chalk.bgGreen("Notes " + title + " was removed."))
    }else{
        console.log(chalk.bgRed("Notes " + title + " was not found."))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log (chalk.red("Yo") + chalk.yellow("u") + chalk.green("r") + " " + chalk.blue("Notes") )

    notes.forEach((notes) => {
        console.log(notes.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Note note found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
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
    addNotes: addNote,
    removeNotes: removeNote,
    listNotes: listNotes,
    readNote: readNote
}