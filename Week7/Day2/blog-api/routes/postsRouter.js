const {Router} = require('express')
const {getAllPosts,
    getPostByID,
    writePost,
    updatePost,
    deletePost
} = require ('../controllers/postsController.js')

const router = Router()

router.get('/', getAllPosts)
router.get('/:id', getPostByID)
router.post('/', writePost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

module.exports = {
    postsRouter : router
}