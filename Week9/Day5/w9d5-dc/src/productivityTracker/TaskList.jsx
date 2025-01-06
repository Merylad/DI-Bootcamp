import './tasklist.css'
import './tasks.css'

import { useSelectCategories, useSelectTaskByCat, useAddTask, useAddCategory, useChoseCategory, useToggleTask } from './state/hooks'

const TaskList = () => {
    const tasks = useSelectTaskByCat()
    const categories = useSelectCategories()
    const callAddTask = useAddTask()
    const callAddCategory = useAddCategory()
    const callUseChoseCategory = useChoseCategory()
    const callToggleTask = useToggleTask()
    

    const handleAddTask = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const categoryID = e.target.category.value
        callAddTask(name, categoryID)
    }

    const handleAddCategory = (e) => {
        e.preventDefault()
        const name = e.target.categoryName.value
        callAddCategory(name)
    }
    return (
        <>
            <h2>Task List</h2>
            <form onSubmit={handleAddTask}>
                <h4>Add a task :</h4>
                <input type="text" placeholder='Task name' name='name'/>
                <select name="category">
                    {categories.map(cat => {
                        return (
                            <option value={cat.id} key={cat.id}> {cat.name}</option>
                        )
                    })}
                </select>
                <input type="submit" value='Add a task' />
            </form>

            <form onSubmit={handleAddCategory}>
                <h4>Add a category :</h4>
                <input type="text" name="categoryName"  />
                <input type="submit" value='Add a category' />
            </form>
            
            <h3>Select tasks by category : </h3>
            <select name="category" onChange={(e) => callUseChoseCategory(e.target.value)}>
                <option value="-1"> Select category...</option>
            {categories.map(cat => {
                        return (
                            <option value={cat.id} key={cat.id}> {cat.name}</option>
                        )
                    })}
            </select>
            {tasks.map(task => {
                return (
                    <div key={task.id} className='tasks'>
                        <input type="checkbox" checked={task.completed} onChange={()=>callToggleTask(task.id)}/>
                        <h5 className={task.completed ? 'completed' : null}>{task.name}</h5>
                        <p>Category : {categories.find(cat => cat.id == task.categoryID)?.name || "No category"}</p>

                    </div>
                )
            })}
        </>
    )
}

export default TaskList