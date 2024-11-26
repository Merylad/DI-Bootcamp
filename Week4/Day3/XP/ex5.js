
const div = document.getElementById('container')
console.log(div)

const uls = document.getElementsByClassName('list')

uls[0].children[1].innerHTML = 'Richard'

let parent = uls[1]
let child = parent.children[1]
parent.removeChild(child)

for (let i of uls) {
    i.children[0].textContent = 'Meryl'
}

for (let i of uls) {
    i.classList.add('student_list')
    i.children[0].classList.add('university','attendance')
}   

div.style.backgroundColor = 'lightblue'
div.style.padding = '10px'
uls[1].children[1].style.display = 'none'
uls[0].children[1].style.border = '1px solid black'
document.body.style.fontSize = '20px'
