const fs = require('fs');

//fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

/** 
** Challenge: Append a message to notes.txt
** 
** 1. Use appendFileSync to append to the file
** 2. Run the script
** 3. Check your work by opening the file and viewing the appended text
*/

try{
    var data = 'data to append'
    fs.appendFileSync('notes.txt', data);
    console.log('The ' + data + ' was appended to file!');
}catch (err){
    console.err("Failed to append data to file");
}
