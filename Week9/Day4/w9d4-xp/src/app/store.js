import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from '../user/userSlice'
import ageReducer from '../age/ageSlice'

const appReducer = combineReducers({
    userReducer,
    ageReducer
})

const store = configureStore({
    reducer: appReducer
})

export default store