const express = require ('express')
const cors = require('cors')
const {RegisterRouter} = require ('./routes/registerRoute.js')
const {loginRouter} = require('./routes/loginRoute.js')
const {usersRouter} = require ('./routes/usersRoute.js')

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 3500

app.listen(PORT, () => {
   console.log(`Listenning on port ${PORT}`) 
})

app.use('/register', RegisterRouter)
app.use('/login', loginRouter)
app.use('/users', usersRouter)