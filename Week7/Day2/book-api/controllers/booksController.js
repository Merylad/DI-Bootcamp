const {getBooksFromDB,
    getBookByIdDB,
    postBookDB,
    updateBookDB,
    deleteBookDB
} = require ('../models/booksModel.js')

const getAllBooks = (req, res) => {
    getBooksFromDB()
    .then(data => res.json(data))
    .catch(e=> {
        console.log(e)
        res.status(404).send('Error : not found :(')
    })
}

const getBookById = (req, res) => {
    const {id} = req.params
    getBookByIdDB(id)
    .then(data => res.json(data))
    .catch(e=> {
        console.log(e)
        res.status(404).send('Error : not found :(')
    })
}

const postBook = (req, res) => {
    const {title, author, publishedyear} = req.body
    postBookDB(title, author, publishedyear)
    .then(data => res.json(data))
    .catch(e=> {
        console.log(e)
        res.status(404).send('Error : not found :(')
    })
}

const updateBook = (req, res) => {
    const {title, author, publishedyear} = req.body
    const {id} = req.params
    updateBookDB(title, author, publishedyear, id)
    .then(data => res.json(data))
    .catch(e=> {
        console.log(e)
        res.status(404).send('Error : not found :(')
    })
}

const deleteBook = (req,res) => {
    const {id} = req.params
    deleteBookDB(id)
    .then(data => res.json(data))
    .catch(e=> {
        console.log(e)
        res.status(404).send('Error : not found :(')
    })
}

module.exports = {getAllBooks,
                 getBookById,
                 postBook,
                 updateBook,
                 deleteBook
}