export class ToDoList {

    constructor (){
        this.tasks = []
    }

    addTask(task){
        this.tasks.push({name : task, complete: false})
    }

    completeTask(task){
        for(let t of this.tasks){
            if (t.name === task){
                t.complete = true
            }
        }
    }

    listTasks(){
        this.tasks.forEach(task => console.log(`${task.name} => Completed : ${task.complete}`))
    }
}