const {Router}= require('express')
const {loginUser}= require ('../controllers/loginController.js')

const router = Router()

router.post('/', loginUser)

module.exports = {
    loginRouter : router
}