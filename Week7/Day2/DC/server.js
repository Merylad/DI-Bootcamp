const express = require ('express')
const {usersRouter} = require ('./routes/usersRoute.js')
const {registerRouter} = require ('./routes/registerRoute.js')
const {loginRouter} = require ('./routes/loginRoute.js')

const app = express()

const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`Listenning on port ${PORT}`)
})

app.use(express.json())

app.use('/users', usersRouter)
app.use('/register', registerRouter)
app.use('/login', loginRouter)

