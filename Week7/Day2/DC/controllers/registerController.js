const {registerDB} = require('../models/registerModel.js')

const registerUser = (req, res) => {
    const {email, username, first_name, last_name, password} = req.body

    registerDB (email, username, first_name, last_name, password)
    .then(data => res.send('Registered successfully'))
    .catch(e=>{
        console.log(e)
        res.status(404).send('Error during registration')
    })
}

module.exports = {registerUser}