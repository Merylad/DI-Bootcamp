const {getTasksJson,
    getTaskByIdJSON,
    writeIntoJSON,
    updateJSON,
    deleteJSON
} = require( '../models/tasksModel.js')

const getTasks = (req, res) => {
    getTasksJson()
    .then(data => res.json(data))
    .catch(error => {
        console.log(error)
        res.status(404).send(error.message)
    })
}

const getTaskByID = (req,res) => {
    const {id} = req.params
    getTaskByIdJSON(id)
    .then(data => res.send(data))
    .catch(error => {
        console.log(error)
        res.status(404).send(error.message)
    })
}

const addTask = async (req, res) => {
    const tasks = await getTasksJson(); 
    const id = tasks.length + 1; 
    const { title, description } = req.body;

    const newTask = {
        id,
        title,
        description,
        done: false
    };

    try {
        const response = await writeIntoJSON(newTask); 
        res.send(response.message);
    } catch (e) {
        console.error(e);
        res.status(500).send('Internal Server Error');
    }
};

const updateTask = async (req, res) => {
    const {id} = req.params
    const {title, description, done} = req.body
    const updatedTask = {
        id,
        title,
        description,
        done
    }

    try {
        const response = await updateJSON(id, updatedTask);
        res.send(response.message);
    } catch (e) {
        console.error(e);
        res.status(500).send('Internal Server Error');
    }
}

const deleteTask = async (req,res) => {
    const {id} = req.params
    try {
        const response = await deleteJSON(id)
        res.send(response.message)
    } catch (e) {
        console.error(e);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {getTasks, getTaskByID, addTask, updateTask, deleteTask}