const {Router} = require('express')
const {getUsers, getUserByID, updateUser} = require ('../controllers/usersController.js')

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUserByID)
router.put('/:id', updateUser)

module.exports = {
    usersRouter : router
}