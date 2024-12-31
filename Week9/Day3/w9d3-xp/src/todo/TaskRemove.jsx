import { useDispatch } from "react-redux"
import { removeTask } from "./tasksSlice"

const TaskRemove = (props) => {
    const id = props.id 
    const dispatch = useDispatch ()
    return (
        <>
            <button onClick={() =>dispatch(removeTask(id))}> X </button>
        </>
    )
}

export default TaskRemove