import chalk from 'chalk';


function myScript (){
    console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))
    console.log(chalk.green(
        'I am a green line ' +
        chalk.blue.underline.bold('with a blue substring') +
        ' that becomes green again!'
    ))
}

myScript()
