const chalk = require('chalk');

function colorfulMessage () {
    return chalk.blue.bgRed.bold('Hello world!')
}

module.exports = {colorfulMessage}