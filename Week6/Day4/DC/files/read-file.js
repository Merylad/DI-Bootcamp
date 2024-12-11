const fs = require('fs')

const readFile = () => {
    fs.readFile('C:/Users/Meryl/Desktop/DI BOOTCAMP/DI-Bootcamp/Week6/Day4/DC/files/file-data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})
}

module.exports = {readFile}
