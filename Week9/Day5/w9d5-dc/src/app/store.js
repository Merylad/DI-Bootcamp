import {configureStore, combineReducers} from '@reduxjs/toolkit'
import taskReducer from '../productivityTracker/state/taskSlice'
import App from '../../../w9d5-xp/src/App'

const appReducer = combineReducers({
    taskReducer
})

const store = configureStore({
    reducer : appReducer
})

export default store