const express = require ('express')
const cors = require('cors')
const {emojis, getRandomEmojiOptions} = require('./config/emojis.js')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use('/', express.static(__dirname + '/public'))


const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Listenning on port ${PORT}`)
})

app.get('/emojis', (req, res) =>{
    const randomEmojisOptions = getRandomEmojiOptions(emojis)
    res.send(randomEmojisOptions)
})

app.post('/submit', (req, res) => {
    const {userAnswer, correctAnswer} = req.body
    let isCorrect = false

    if(userAnswer === correctAnswer){
        isCorrect = true
    } 

    res.send(isCorrect)

    
})



