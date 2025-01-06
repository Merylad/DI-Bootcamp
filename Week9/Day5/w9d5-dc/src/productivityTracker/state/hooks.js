import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addTask, addCategory, choseCategory, toggleTask } from "./taskSlice";

import { selectTaskByCat, selectCategories } from "./selectors";



export const useSelectTaskByCat = () => {
    return useSelector(selectTaskByCat)
}

export const useSelectCategories = () => {
    return useSelector(selectCategories)
}

export const useAddTask = () => {
    const dispatch = useDispatch()
    return useCallback((name, categoryID) => {
        dispatch(addTask({name, categoryID}))
    }, [dispatch])
}

export const useAddCategory = () => {
    const dispatch = useDispatch()
    return useCallback((name) => {
        dispatch(addCategory(name))
    }, [dispatch])
}

export const useChoseCategory = () => {
    const dispatch = useDispatch()
    return useCallback((id) => {
        dispatch(choseCategory(id))
    }, [dispatch])
}

export const useToggleTask = () => {
    const dispatch = useDispatch()
    return useCallback((id)=> {
        dispatch(toggleTask(id))
    }, [dispatch])
}

