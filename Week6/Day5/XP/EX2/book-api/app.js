const express = require ('express')

const app = express() 

app.use (express.json())

const PORT = 5000

app.listen(PORT, ()=> {
    console.log(`Listenning on port ${PORT}`)
})

const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishedYear: 1813
    }
  ];

app.get('/api/books', (req,res) => {
    res.send(books)
})

app.get('/api/books/:id', (req,res) => {
    const {id} = req.params
    const book = books.find(item => item.id == id)
    if (book) {
        res.send(book)
    } else {
        res.status(404).send('Book not found')
    }
})

app.post ('/api/books', (req,res) => {
    const {title, author, publishedYear} = req.body
    const newBook = {
        id : books.length +1,
        title,
        author,
        publishedYear
    }
    books.push(newBook)
    res.status(201).json(newBook)
    console.log(books)
})
  