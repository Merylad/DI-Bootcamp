import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RecipeI, RecipeState } from "../types/types";
import getRecipes from "../api/api";

const initialState : RecipeState = {
    recipes : [],
    status : ''
}

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async() => {
    const data = await getRecipes()
    return data
})

const recipeSlice = createSlice({
    name : 'recipes',
    initialState,
    reducers : {},
    extraReducers(builder){
        builder
        .addCase(fetchRecipes.pending, state => {
            state.status = 'LOADING'
        })
        .addCase (fetchRecipes.fulfilled, (state, action : PayloadAction<any>)=> {
            state.status = 'SUCCESS'
            state.recipes = action.payload.recipes
        })
        .addCase(fetchRecipes.rejected, state => {
            state.status = 'FAILED'
        })
    }
})

export default recipeSlice.reducer