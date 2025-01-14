const jwt = require ('jsonwebtoken')
const dotenv = require ('dotenv')
dotenv.config()

const {ACCESS_TOKEN_SECRET} = process.env

const verifyToken = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        res.status(401).json({message : 'Unauthorized'})
        return
    }

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decode) => {
        if (err) {
            res.status(403).json({message : 'Forbidden', error : err.message})
            console.log(err)
            return
        }

        console.log(decode)

        /**need to change the global type of request in ts */
        req.user = decode
        next()

    })
}



module.exports = {verifyToken}