const {db} = require('../config/data.js')

const getPostsDB = () =>{
    return db('posts')
    .select('id', 'title', 'content')
}

const getPostByIDDB = (id) => {
    return db ('posts')
    .select ('id', 'title', 'content')
    .where({id})
}

const postIntoDB = (title, content) => {
    return db('posts')
    .insert({title, content}, ['title', 'content'])
}

const updatePostDB = (title, content, id) => {
    return db('posts')
    .update({title, content}, ['id','title', 'content'])
    .where({id})
}

const deletePostDB = (id) => {
    return db('posts')
    .del()
    .where({id})
    .returning('*')
}

module.exports = {getPostsDB, getPostByIDDB, postIntoDB, updatePostDB, deletePostDB}