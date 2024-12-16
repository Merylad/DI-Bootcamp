const {Router}= require('express')
const {registerUser} = require ('../controllers/registerController.js')

const router = Router()

router.post('/', registerUser)

module.exports = {
    registerRouter : router
}