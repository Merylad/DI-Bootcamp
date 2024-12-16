const {db} = require('../config/data.js')

const getUsersDB = () => {
    return db('users')
    .select('*')
}

const getUserByIDDB = (id) => {
    return db('users')
    .select ('*')
    .where ({id})
}

const updateUserDB = (email, username, first_name, last_name, id) => {

    return db('users')
    .update({email, username, first_name, last_name}, ['*'])
    .where({id})

    
}

module.exports = {getUsersDB, getUserByIDDB, updateUserDB}