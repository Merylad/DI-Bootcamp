const {Router} = require('express')
const {registerUser, loginUser, getAllUsers, logoutUser, verifyAuth} = require ('../controllers/userController.js')
const {verifyToken} = require ('../middlewares/verifyToken.js')

const router = Router()

router.post ('/register', registerUser)
router.post('/login', loginUser)
router.get('/all',verifyToken, getAllUsers)
router.get('/logout', logoutUser)
router.get('/refresh',verifyToken, verifyAuth)

module.exports = router