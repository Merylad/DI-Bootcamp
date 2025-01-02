import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users : [],
    status : ''
}

export const getData = createAsyncThunk('users/getData', async ()=> {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const data = await response.json ()
        return data
    } catch (error) {
        console.log(error)
        throw new Error ('Something went wront in the fetch of the todos')
    }
})

const userSlice = createSlice ( {
    name : 'users',
    initialState,
    reducers : {

    },
    extraReducers(builder){
        builder
        .addCase(getData.fulfilled, (state, action) => {
            state.status = 'success'
            state.users = action.payload
        })
        .addCase(getData.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getData.rejected, state => {
            state.status = 'failed'
        })
    }
    })

export default userSlice.reducer