const express = require('express')
const cookieParser = require ("cookie-parser")
const cors = require ('cors')
const {db} = require ('./config/db.js')
const userRouter = require('./routes/userRouter.js')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials : true,
}))

const PORT = 3000

app.listen(PORT || 5001, ()=> {
    console.log(`listenning on ${PORT}`)
})

app.use('/api/user', userRouter)