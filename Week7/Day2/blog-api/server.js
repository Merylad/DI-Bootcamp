const express = require ('express')
const {postsRouter} = require ('./routes/postsRouter.js')


const app = express ()

const PORT = 3000
app.listen(PORT, ()=> {
    console.log(`listenning on port ${PORT}`)
})

app.use(express.json())

app.use('/api/posts' ,postsRouter)



