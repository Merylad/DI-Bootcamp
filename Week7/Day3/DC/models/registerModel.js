const fs = require('fs').promises
const bcrypt = require('bcrypt');
const saltRounds = 10;
const filePath = 'C:/Users/Meryl/Desktop/DI BOOTCAMP/DI-Bootcamp/Week7/Day3/DC/config/users.json';

const registerJSON = async (userInfo) => {
    const {firstName, lastName, email, username, password} = userInfo

    const salt = bcrypt.genSaltSync(saltRounds)
    const hashpassword = bcrypt.hashSync(password, salt)


    try{
        const usersJSON = await fs.readFile(filePath, 'utf-8');
        const users = JSON.parse(usersJSON)

        const alreadyExists = users.find (item => item.username == username)

        if(alreadyExists){
            return {message : 'This username already exists'}
        }else {
            const id = users.length +1

        const newUser = {
            id,
            firstName,
            lastName,
            email,
            username,
            password : hashpassword
        }

        users.push(newUser)
        await fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf-8');

        return { message: 'User successfully added' };
        }
        
    } catch(e) {
        console.log(e)
        return { message: 'An error occurred' }
    }


}

module.exports = {registerJSON}