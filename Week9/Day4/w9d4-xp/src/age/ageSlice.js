import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const initialState = {
    age : 0,
    status : ''
}

export const ageUpAsynch = createAsyncThunk('age/ageUp', ()=> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve (1)
        }, 5000)
    })
})

export const ageDownAsynch = createAsyncThunk('age/ageDown', ()=> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve (1)
        }, 5000)
    })
})


const ageSlice = createSlice({
    name : 'age',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder 
        .addCase(ageUpAsynch.fulfilled, (state, action)=> {
            state.status = 'success'
            state.age += action.payload
        })
        .addCase (ageUpAsynch.pending, (state) => {
            state.status = 'pending'
        })
        .addCase (ageUpAsynch.rejected, (state) => {
            state.status = 'failed'
        })
        .addCase(ageDownAsynch.fulfilled, (state, action)=> {
            state.status = 'success'
            state.age -= action.payload
        })
        .addCase (ageDownAsynch.pending, (state) => {
            state.status = 'pending'
        })
        .addCase (ageDownAsynch.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export default ageSlice.reducer