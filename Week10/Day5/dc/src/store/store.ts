import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from '../features/dataSlice'

const store = configureStore({
    reducer : {
        recipeReducer
    }
})

export default store
export type AppDispatch = typeof store.dispatch;