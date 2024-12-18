const fs = require('fs').promises
const bcrypt = require('bcrypt');
const filePath = 'C:/Users/Meryl/Desktop/DI BOOTCAMP/DI-Bootcamp/Week7/Day3/DC/config/users.json';

const checkUser = async (username, password) => {
    try {
        const usersJSON = await fs.readFile(filePath, 'utf-8');
        const users = JSON.parse(usersJSON)

        const myUser = users.find (item => item.username == username)

        if (myUser){
            const encryptPassword = myUser.password
            const isMatch = await bcrypt.compare(password, encryptPassword);

            if (isMatch) {
                return {message: 'Successfully Logged In !'}
            } else {
                return {message : 'Wrong password'}
            }

        }else {
            return {message : 'This username does not exist'}
        }
    }catch(e){
        console.log(e)
        return {message : 'Internal Serveur Error'}
    }
}

module.exports = {checkUser}