const {getPostsDB,
        getPostByIDDB,
        postIntoDB,
        updatePostDB,
        deletePostDB
        } = require ('../models/postsModel.js')

const getAllPosts = (req,res) => {
    getPostsDB()
    .then(data => res.json(data))
    .catch(e => {
        console.log(e)
        res.status(404).send('Not found')
    })
}

const getPostByID = (req,res) => {
    const {id} = req.params
    getPostByIDDB(id)
    .then(data => res.json(data))
    .catch(e => {
        console.log(e)
        res.status(404).send('Not found')
    })
}

const writePost = (req, res) => {
    const {title, content} = req.body
    postIntoDB(title, content)
    .then(data => res.json(data))
    .catch(e => {
        console.log(e)
        res.status(404).send('Not found')
    })
}

const updatePost = (req, res) => {
    const {id} = req.params
    const {title, content} = req.body
    updatePostDB(title, content, id)
    .then(data => res.json(data))
    .catch(e => {
        console.log(e)
        res.status(404).send('Not found')
    })
}

const deletePost = (req, res) => {
    const {id} = req.params
    deletePostDB(id)
    .then(data => res.json(data))
    .catch(e => {
        console.log(e)
        res.status(404).send('Not found')
    })
}

module.exports = {getAllPosts,
                getPostByID,
                writePost,
                updatePost,
                deletePost
}