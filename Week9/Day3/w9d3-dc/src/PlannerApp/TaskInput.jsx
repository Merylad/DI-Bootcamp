import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./plannerAppSlice";

const TaskInput = (props) => {
    const date = props.date
    const [taskName, setTaskName] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = () => {
        
        dispatch(addTask({ name: taskName, date }));
        setTaskName("");
        
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;