const express = require ('express')
const {fetchPosts} = require('./data/dataService.js')

const app = express()

app.use (express.json())

const PORT = 5000

app.listen (PORT, () => {
    console.log (`Listenning on port ${PORT}`)
})

app.get('/api/posts', async(req,res) => {
    
    try {
        const posts = await fetchPosts('https://jsonplaceholder.typicode.com/posts')
        console.log('The data has been successfully retrieved')
        res.send(posts)
    } catch (error) {
        console.log(error)
    }
})

