const fs = require('fs').promises;
const filePath = 'C:/Users/Meryl/Desktop/DI BOOTCAMP/DI-Bootcamp/Week7/Day3/taskManagement/config/tasks.json';

const getTasksJson = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        const tasks = JSON.parse(data)
        return tasks
        
    } catch (err) {
        console.log(err);
        return { message: 'Internal Server Error' };
    }
}

const getTaskByIdJSON = async (id) => {
    try {
        const tasks = await getTasksJson()
        
        const taskID = tasks.find(item => item.id == id)
        if (taskID) {
            return taskID
        } else {
            throw new Error("There is no task with this id");
            
        }
    }catch (e){
        console.log(e)
        return {message : e}
    }
}

const writeIntoJSON = async (newTask) => {

    try {
        
        const data = await fs.readFile(filePath, 'utf-8');
        const tasks = JSON.parse(data);

        
        tasks.push(newTask);

        
        await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf-8');

        return { message: 'Task successfully added' };
    } catch (err) {
        console.error(err);
        return { message: 'An error occurred' };
    }
};

const updateJSON = async (id, updatedTask) => {
    try{
        const data = await fs.readFile(filePath, 'utf-8');
        const tasks = JSON.parse(data);

        const index = tasks.findIndex(item => item.id ==id)

        if (index == -1) {
            return {message : 'This task does not exist'}
        } else {
            tasks[index] = updatedTask
            await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf-8');

            return { message: 'Task successfully updated' };
        }
    }catch(err) {
        console.error(err);
        return { message: 'An error occurred' };
    }
}

const deleteJSON = async (id) => {
    
        try{
            const data = await fs.readFile(filePath, 'utf-8');
            const tasks = JSON.parse(data);
    
            const index = tasks.findIndex(item => item.id ==id)
    
            if (index == -1) {
                return {message : 'This task does not exist'}
            } else {
                tasks.splice(index, 1)
                await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
    
                return { message: 'Task successfully deleted' };
            }
        }catch(err) {
            console.error(err);
            return { message: 'An error occurred' };
        }
    }


module.exports = {getTasksJson, getTaskByIdJSON, writeIntoJSON, updateJSON, deleteJSON}
