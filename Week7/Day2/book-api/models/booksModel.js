const {db} = require ('../config/data.js')

const getBooksFromDB = () => {
    return db('books')
    .select('id', 'title', 'author', 'publishedyear')
}

const getBookByIdDB = (id) => {
    return db('books')
    .select('id', 'title', 'author', 'publishedyear')
    .where({id})
}

const postBookDB = (title, author, publishedyear) => {
    return db('books')
    .insert({title, author, publishedyear}, ['id', 'title', 'author', 'publishedyear'])
}

const updateBookDB = (title, author, publishedyear, id) => {
    return db('books')
    .update({title, author, publishedyear}, ['id', 'title', 'author', 'publishedyear'])
    .where({id})
}

const deleteBookDB = (id) => {
    return db('books')
    .del()
    .where({id})
    .returning('*')
}

module.exports = {getBooksFromDB,
                 getBookByIdDB,
                 postBookDB,
                 updateBookDB,
                 deleteBookDB
}