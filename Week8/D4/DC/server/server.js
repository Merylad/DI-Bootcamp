const express = require ('express')
const cors = require ('cors')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Listenning on port ${PORT}`)
})

const Hello = (req,res) => {
    res.json({message : 'Hello from express!'})
}

const receivePost = (req, res) => {
    const {client} = req.body
    res.json({message : `I received your POST request. This is what you sent me : ${client}`})
}

app.get('/api/hello', Hello)
app.post('/api/world', receivePost)


