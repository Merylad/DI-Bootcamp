let myForm = document.getElementById('myForm')
let userTask = document.getElementById('userTask')
let myTasks = document.getElementById('myTasks')



myForm.addEventListener('submit', function(e){
    e.preventDefault()
    const taskText = userTask.value;

    // Create the new task elements
    let div = document.createElement('div');
    div.setAttribute('class', 'row container thisDiv')
    
    let deleteBtn = document.createElement('button');
    let checkbox = document.createElement('input');
    let span = document.createElement('span')
    let label = document.createElement('label')
    span.textContent = taskText
    span.setAttribute('class', 'oneTask')
    
    checkbox.setAttribute('type', 'checkbox');
    


    
    deleteBtn.setAttribute('class', 'btn waves-effect red deleteBtn');
    let i = document.createElement('i');
    i.textContent = 'delete';
    i.setAttribute('class', 'material-icons');
    deleteBtn.appendChild(i);

    

    // Append everything to the task container
    label.appendChild(checkbox)
    label.appendChild(span)
    div.appendChild(label)
    div.appendChild(deleteBtn); 
    myTasks.appendChild(div);

    
    userTask.value = '';


    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through';
        } else {
            span.style.textDecoration = 'none';
        }
    });

    deleteBtn.addEventListener('click', function(){
        myTasks.removeChild(div)
    })

    
})




