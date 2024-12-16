const {db} = require('../config/data.js')
const bcrypt = require('bcrypt');

const checkDB = async (username, password) => {
    try {
        
        const data = await db('hashpwd')
            .select('password')
            .where({ username });

        
        if (data.length > 0) {
            const hashedPassword = data[0].password; 

            
            const isMatch = await bcrypt.compare(password, hashedPassword);

            if (isMatch) {
                return { success: true, message: 'Logged in successfully' };
            } else {
                return { success: false, message: 'Wrong password' };
            }
        } else {
            return { success: false, message: 'This username does not exist' };
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
};

module.exports = { checkDB };