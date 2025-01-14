const {registerUserDB, getUserByEmail, getUsers} = require('../models/userModel.js')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const registerUser = async (req,res) => {
    const {email, password} = req.body

    try {
        const user = await registerUserDB(email, password)
        res.status(201).json({
            message : 'User registered successfully',
            user})
    } catch (error) {
        console.log(error)
        if(error.code === '23505'){
            res.status(400).json({message : 'Email already exists'})
            return
        }
        res.status(500).json({message : 'Internal server error'})
    }
}

const loginUser = async (req,res) => {
    const {password, email} = req.body
   
   
    try {
        const user = await getUserByEmail(email)
        if(!user) {
            res.status(404).json({message : 'User does not exist'})
            return
        }

        const passwordMatch = await bcrypt.compare(password + '', user.password)
        if(!passwordMatch){
            res.status(404).json({message : 'Wrong password'})
            return
        }

        //if everything is good we create a token
        const {ACCESS_TOKEN_SECRET} = process.env

        const accessToken = jwt.sign(
            {userid : user.id, email: user.email},
            ACCESS_TOKEN_SECRET,
            {expiresIn : '300s'}

        )

        //set the token on httpOnly cookie
        res.cookie('token', accessToken, {
            maxAge : 300*1000,
            httpOnly : true
        })

        //response to client

        res.status(200).json({
            message: 'Successfully login',
            user : {userid : user.id, email : user.email},
            token : accessToken
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({message : 'Internal server error'})
    }
}

const getAllUsers = async (req,res) => {
    try {
        const users = await getUsers()
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({message : 'Internal server error'})
    }
}

const logoutUser = (req,res) => {
    res.clearCookie('token')
    req.cookies.token = null
    delete req.cookies.token 

    //not forget to also set the token to null in the DB

    res.sendStatus(200)
}

const verifyAuth = (req,res) => {
    console.log(req.user)
    const {userid, email} = req.user
    const {ACCESS_TOKEN_SECRET} = process.env

    const newAccessToken = jwt.sign(
        {userid, email},
        ACCESS_TOKEN_SECRET,
        {expiresIn: '60s'}

    )

    res.cookie('token', newAccessToken, {
        httpOnly : true,
        maxAge : 60*1000
    })
    res.json({
        message : 'verified',
        user : {userid, email},
        token : newAccessToken
    })
}


module.exports = {registerUser, loginUser, getAllUsers, logoutUser, verifyAuth}