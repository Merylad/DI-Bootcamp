const fs = require('fs')


fs.readFile('source.txt', 'utf-8', (err, data) =>{
    if (err) {
        console.log(err)
    } else {
        console.log(data)
     }
})



fs.copyFile ('source.txt', 'destination.txt', err => {
    if (err) return console.log(err)
} )
