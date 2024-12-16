const {checkDB} = require ('../models/loginModel.js')

const loginUser = (req, res) => {
    const {username, password} = req.body

    checkDB(username, password)
    .then(result => {
        if (result.success) {
            res.status(200).send(result.message)
        } else {
            res.status(401).send(result.message)
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
        res.status(500).send('Internal server error'); 
    });
}

module.exports = {loginUser}