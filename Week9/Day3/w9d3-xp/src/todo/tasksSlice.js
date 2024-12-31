import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';



const initialState = {
    tasks : []
}

const tasksSlice = createSlice ({
    name : 'tasks',
    initialState ,
    reducers : {
        addTask : (state, action) => {
            state.tasks.push({id : uuidv4(), name : action.payload.name, date: action.payload.date, completed : false})
            state.tasks= state.tasks.sort((a,b) => new Date(a.date) - new Date (b.date))
        },
        removeTask : (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        toggleTask : (state, action) => {
            state.tasks = state.tasks.map(task => task.id === action.payload ? {...task, completed : !task.completed} : task)
        }
        
    }
})
export const {addTask, removeTask, toggleTask} = tasksSlice.actions
export default tasksSlice.reducer