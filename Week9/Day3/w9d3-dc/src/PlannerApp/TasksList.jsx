import { useSelector } from "react-redux"
import TaskRemove from "./TaskRemove";
import EditTask from "./EditTask";
import { toggleTask } from "./plannerAppSlice";
import { useDispatch } from "react-redux"

const TasksList = (props) => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.taskReducer.tasks)
    const date = props.date
    const filteredTasks = tasks.filter (task => task.date === date )
    return (
        <>
            <h2>Tasks List</h2>
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.completed} onChange={()=>dispatch(toggleTask(task.id))}/>
                        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.name} </span>
                        <TaskRemove id={task.id}/>
                        <EditTask id = {task.id}/>
                    </li>
                 
                ))}
            </ul>

        </>
    )
}

export default TasksList