import { createSelector } from "@reduxjs/toolkit";

const tasksState = state => state.taskReducer

export const selectTaskByCat = createSelector ([tasksState], state => {
    if (state.chosenCategory == -1) return state.tasks
    return state.tasks.filter(task => task.categoryID == state.chosenCategory)
})

export const selectCategories = createSelector([tasksState], state => state.categories)

