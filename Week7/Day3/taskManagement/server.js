const express = require ('express')
const {taskRouter} = require ('./routes/tasksRoute')

const app = express()
app.use(express.json())

const PORT = 3000 

app.listen (PORT, ()=> {
    console.log(`Listenning on port ${PORT}`)
})

app.use('/tasks', taskRouter)