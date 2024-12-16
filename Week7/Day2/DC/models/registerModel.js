const {db} = require('../config/data.js')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerDB = async (email, username, first_name, last_name, password) => {
    const trx = await db.transaction()
    
    try{
        await db('users')
        .insert ({email, username, first_name, last_name}, ['id'])
        .transacting(trx)

        const salt = bcrypt.genSaltSync(saltRounds)
        const hashpassword = bcrypt.hashSync(password, salt)

        await db('hashpwd')
        .insert({username, password :hashpassword}).transacting(trx)
        trx.commit()
    
    } catch(e) {
        console.log('error during registration : ',e)
        trx.rollback()
    }
   
}

module.exports = {registerDB}