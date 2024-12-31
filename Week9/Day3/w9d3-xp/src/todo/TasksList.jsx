import { useSelector, useDispatch} from "react-redux"
import TaskRemove from "./TaskRemove"
import { toggleTask } from "./tasksSlice"

const TasksList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasksReducer.tasks)
    return (
        <>
            <h3>My tasks :</h3>
            <section style={{display:'flex', flexDirection: 'column', gap : '20px', backgroundColor: 'lightblue'}}>
            {tasks.map(item => {
                return (
                    <div key={item.id}  style={{display:'flex', justifyContent: 'space-between', width : '500px', padding: '20px'}}>
                        <input type="checkbox" checked={item.completed} onChange={()=>dispatch(toggleTask(item.id))}/>
                        <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                            {item.name} {item.date}
                        </span>
                        <TaskRemove id = {item.id}/>
                        
                    </div>
                )
            })}
            </section>
        </>
    )
}

export default TasksList