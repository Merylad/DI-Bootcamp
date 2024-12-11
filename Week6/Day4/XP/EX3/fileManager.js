const fs = require('fs')

function readFile (file) {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err){
            console.log(err)
        } else {
            console.log(data)
        }
    })
}

function writeFile (file, data) {
    fs.writeFile(file, data, 'utf-8', err=>{
        if(err) return console.log(err)
    })
}

module.exports = {readFile, writeFile}