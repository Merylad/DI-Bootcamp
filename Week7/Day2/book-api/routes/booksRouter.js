const {Router} = require('express')
const {getAllBooks,
    getBookById,
    postBook,
    updateBook,
    deleteBook
} = require ('../controllers/booksController.js')

const router = Router()

router.get('/', getAllBooks)
router.get('/:id', getBookById)
router.post('/', postBook)
router.put('/:id', updateBook)
router.delete ('/:id', deleteBook)


module.exports = {
    booksRouter : router
}