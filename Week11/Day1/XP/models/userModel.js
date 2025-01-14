const {db} = require('../config/db.js')
const bcrypt = require ('bcrypt')

const registerUserDB = async (email, password) => {
    const hashPassword = await bcrypt.hash(password + '', 10)

    try {
        const [user] = await db('users').insert({
            email : email.toLowerCase(),
            password : hashPassword,

        }, ['email', 'id'])

        return user
    } catch (error) {
        console.log(error)
        throw error
    }
}

const getUserByEmail = async (email) => {
    try {
        const user = await db('users')
        .select ('id', 'email', 'password')
        .where ({email : email.toLowerCase()})
        .first()

        return user
    } catch (error) {
        console.log(error)
        throw error
    }
}

const getUsers = async () => {
    try {
        const users = await db('users').select('id', 'email')
        return users
    } catch (error) {
        console.log(error)
        throw error
       
    }
}



module.exports = {registerUserDB, getUserByEmail, getUsers}