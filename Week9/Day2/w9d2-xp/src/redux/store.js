import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { todoReducer } from './reducers'

const appReducer = combineReducers ( {
    todoReducer
})

const store = configureStore({
    reducer : appReducer
})

export default store