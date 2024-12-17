const {Router} = require('express')
const {getTasks,
    getTaskByID,
    addTask,
    updateTask,
    deleteTask
} = require ('../controllers/tasksController.js')

const router = Router ()

router.get('/', getTasks)
router.get('/:id', getTaskByID)
router.post('/', addTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = {
    taskRouter : router
}