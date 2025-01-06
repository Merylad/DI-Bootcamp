import {createSlice, nanoid} from '@reduxjs/toolkit'


const initialState = {
    tasks: [
      { id: 1, name: "Complete Redux setup", completed: false, categoryID: 1 },
      { id: 2, name: "Write documentation", completed: false, categoryID: 2 },
      { id: 3, name: "Fix bugs", completed: true, categoryID: 1 },
    ],
    categories: [
      { id: 1, name: "Work" },
      { id: 2, name: "Personal" },
    ],
    chosenCategory : -1
  };

const taskSlice = createSlice({
    name : 'tasks',
    initialState,
    reducers : {
        addTask : (state, action)=>{
            state.tasks.push({
                id : nanoid(),
                name : action.payload.name,
                completed : false,
                categoryID : action.payload.categoryID
            })
            
        },
        editTask : (state, action) => {
            state.tasks.map(task => task.id === action.payload.id ? {...task, name : action.payload.name, categoryID : action.payload.categoryID} : task)
        },
        toggleTask : (state, action) => {
            state.tasks = state.tasks.map(task => task.id == action.payload ? {...task, completed : !task.completed} : task)
        },
        deleteTask : (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        addCategory : (state, action) => {
            state.categories.push({id : nanoid(), name: action.payload})
        },
        choseCategory : (state, action) => {
            state.chosenCategory = action.payload
        }
    },
    extraReducers(builder){}
})

export const {addTask, editTask, toggleTask, deleteTask, addCategory, choseCategory} = taskSlice.actions
export default taskSlice.reducer