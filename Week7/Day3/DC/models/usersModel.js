const fs = require('fs').promises
const filePath = 'C:/Users/Meryl/Desktop/DI BOOTCAMP/DI-Bootcamp/Week7/Day3/DC/config/users.json';

const getUsersJSON = async () =>{
    try{
        const users = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(users)
    }catch(e){
        console.log(e)
        return {message : 'Internal error'}
    }
}

const getUserByIDJSON = async (id) => {
    try {
        const users = await getUsersJSON()
        const user = users.find(item => item.id == id)
        if (user){
           return user
        }else{
            return {message:'User not found'}
        }
    } catch (error) {
        console.log(error)
        return {message : 'Internal issue'}
    }
}

const updateUserJSON = async(updatedUser, id)=> {

    try {
        const users = await getUsersJSON()
        const index = users.findIndex(item => item.id == id)

        if(index == -1){
            return({message: 'This user does not exist'})
        } else {

            users[index] = {id, ...updatedUser}
            await fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf-8');
            return {message: 'User updated successfully'} 

        }
    } catch (error) {
        console.log(error)
        return {message : 'Internal error'}
    }
}

module.exports = {getUsersJSON, getUserByIDJSON, updateUserJSON}