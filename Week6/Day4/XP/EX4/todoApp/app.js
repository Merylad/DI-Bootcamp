import { ToDoList } from "./todo.js"

let myToDoList = new ToDoList()

myToDoList.addTask('Do laundry')
myToDoList.addTask('Do homeworks')
myToDoList.addTask('Get the kids')
myToDoList.addTask('Prepare lunch')

myToDoList.completeTask('Do homeworks')
myToDoList.completeTask('Get the kids')

myToDoList.listTasks()

// OUTPUT
// Do laundry => Completed : false
// Do homeworks => Completed : true
// Get the kids => Completed : true
// Prepare lunch => Completed : false

