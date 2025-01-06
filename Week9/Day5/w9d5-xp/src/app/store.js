import bookReducer from "../book/BookSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const appReducer = combineReducers({
    bookReducer
})

const store = configureStore({
    reducer : appReducer
})

export default store

