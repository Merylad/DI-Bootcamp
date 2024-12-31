import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskReducer from '../PlannerApp/plannerAppSlice'

const appReducer = combineReducers ({
    taskReducer
})

const store = configureStore ({
    reducer : appReducer
})

export default store