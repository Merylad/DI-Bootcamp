import React, { useReducer, useState, useRef } from "react";
import "./todoApp.css";

const initialState = {
  tasks: [],
  filter: "ALL",
};

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false, isEditing: false }],
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, text: action.payload.text, isEditing: false } : task
        ),
      };
    case "TOGGLE_EDIT":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isEditing: !task.isEditing } : task
        ),
      };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

const TaskManager = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [input, setInput] = useState("");
  const editRefs = useRef({}); 

  const handleAddTask = () => {
    if (!input.trim()) return;
    dispatch({ type: "ADD_TASK", payload: input });
    setInput("");
  };

  const handleFilterChange = (filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  const handleSaveEdit = (taskId) => {
    const newValue = editRefs.current[taskId]?.value.trim();
    if (newValue) {
      dispatch({ type: "EDIT_TASK", payload: { id: taskId, text: newValue } });
    }
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "ACTIVE") return !task.completed;
    if (state.filter === "COMPLETED") return task.completed;
    return true;
  });

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>

      <div className="add-task">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <div className="filter-buttons">
        <button onClick={() => handleFilterChange("ALL")}>All</button>
        <button onClick={() => handleFilterChange("ACTIVE")}>Active</button>
        <button onClick={() => handleFilterChange("COMPLETED")}>Completed</button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
            />

            {task.isEditing ? (
              <>
                <input
                  type="text"
                  defaultValue={task.text}
                  ref={(el) => (editRefs.current[task.id] = el)} 
                />
                <button onClick={() => handleSaveEdit(task.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <button
                  onClick={() => dispatch({ type: "TOGGLE_EDIT", payload: task.id })}
                >
                  Edit
                </button>
              </>
            )}

            <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: task.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
