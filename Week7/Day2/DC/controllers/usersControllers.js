const {getUsersDB, getUserByIDDB, updateUserDB} = require ('../models/usersModel.js')

const getAllUsers = (req, res) => {
    getUsersDB()
    .then(data => res.send(data))
    .catch(e => {
        console.log(e)
        res.status(404).send('Error')
    })
}

const getUserByID = (req,res) => {
    const {id} = req.params
    getUserByIDDB(id)
    .then(data => {
        if (data.length>0){
            res.send(data)
        } else {
            res.status(404).send('User not found')
        }
    })
        
    .catch(e => {
        console.log(e)
        res.status(404).send('Error')
    })
}

const updateUser = (req,res) => {
    const {id} = req.params
    const {email, username, first_name, last_name} = req.body
    updateUserDB(email, username, first_name, last_name,id)
    .then(data => res.send(data))
    .catch(e => {
        console.log(e)
        res.status(404).send('Error')
    })
}

module.exports = {getAllUsers, getUserByID, updateUser}