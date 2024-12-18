const {registerJSON} = require ('../models/registerModel.js')

const registerUser = async (req, res) => {
    const {firstName, lastName, email, username, password} = req.body
    const newUser = {
        firstName,
        lastName,
        email,
        username,
        password
    }

    try {
        const response = await registerJSON(newUser)
        res.json(response.message)
    }catch (e){
        console.log(e)
        res.status(404).send(e.message)
    }
}

module.exports = {registerUser}