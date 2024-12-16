const express = require ('express')
const {booksRouter} = require ('./routes/booksRouter.js')

const app = express ()

const PORT = 5000
app.listen(PORT, ()=> {
    console.log(`listenning on port ${PORT}`)
})

app.use(express.json())

app.use ('/api/books', booksRouter)