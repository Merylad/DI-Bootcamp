const {checkUser} = require ('../models/loginModel.js')

const loginUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const response = await checkUser(username, password)
        res.json(response.message)
    }catch(e){
        console.log(e)
        res.status(404).send(e.message)
    }
}

module.exports = {loginUser}