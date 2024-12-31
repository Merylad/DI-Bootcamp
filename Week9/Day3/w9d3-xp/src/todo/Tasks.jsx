import TaskInput from "./TaskInput";
import TasksList from "./TasksList";

const Tasks = () => {
    return(
        <>  
            <h1>MY TODO LIST</h1>
            <TaskInput />
            <TasksList />
        </>
    )
}

export default Tasks