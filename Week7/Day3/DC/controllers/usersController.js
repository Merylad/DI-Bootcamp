const {getUsersJSON, getUserByIDJSON, updateUserJSON} = require('../models/usersModel.js')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getUsers = async (req, res) => {
    try {
        const users = await getUsersJSON()
        res.send(users)
    } catch (error) {
        console.log(error)
        res.status(404).send(error.message)
    }
}

const getUserByID = async (req,res) => {
    const {id} = req.params
    try {
        const response = await getUserByIDJSON(id)
        res.send(response)
    } catch (error) {
        console.log(error)
        res.status(404).send(error.message)
    }
}

const updateUser = async(req, res) => {
    const {id} = req.params
    const {firstName, lastName, email, username, password} = req.body
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashpassword = bcrypt.hashSync(password, salt)

    const updatedUser = {
        firstName,
        lastName,
        email,
        username,
        password : hashpassword
    }

    try {
        const response = await updateUserJSON (updatedUser, id)
        res.send(response.message)
    } catch (error) {
        console.log(error)
        res.status(404).send(error.message)
    }

}


module.exports = {getUsers, getUserByID, updateUser}