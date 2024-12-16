const {Router}= require('express')
const {getAllUsers, getUserByID, updateUser} = require ('../controllers/usersControllers.js')

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getUserByID)
router.put('/:id', updateUser)

module.exports = {
    usersRouter : router
}