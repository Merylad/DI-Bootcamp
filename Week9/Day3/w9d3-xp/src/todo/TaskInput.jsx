import { useDispatch } from "react-redux"
import { addTask } from "./tasksSlice"
import { useRef } from "react"

const TaskInput = () => {
    const nameRef = useRef()
    const dateRef = useRef()
    const dispatch = useDispatch()

    const addNewTask = () => {
        const name = nameRef.current.value 
        const date = dateRef.current.value 

        if(name.trim() === '')return 

        dispatch (addTask({name, date}))

    }
    return (
        <>
            <h3>Add a task :</h3>
            <input type="text" placeholder="Task Name" ref={nameRef} />
            <input type="date" ref={dateRef}/>
            <button onClick={()=> addNewTask()}>Add Task</button>
        </>
    )
}

export default TaskInput