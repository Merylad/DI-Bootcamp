import { ADD, TOGGLE, REMOVE } from "./actions";

const initialState = []

export const todoReducer = (state = initialState, action) => {
    if (action.type === ADD){
        return [...state, {id : Date.now, text : action.payload, completed : false}]
    } else if (action.type === REMOVE){
        return state.filter(todo => todo.id != action.payload)
    } else if (action.type === TOGGLE){
        return state.map(task => task.id === action.payload ? {...task, completed : true} : task)
    }
    return state
}