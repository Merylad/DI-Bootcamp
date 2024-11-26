myDiv = document.getElementById('navBar')
myDiv.setAttribute('id', 'socialNetworkNavigation')

console.log(myDiv)

let newLi = document.createElement('li') 
let newTextNode = document.createTextNode('Logout');

const ul = myDiv.querySelector('ul')
newLi.appendChild(newTextNode)
ul.appendChild(newLi)

let first = ul.firstElementChild
let last = ul.lastElementChild

console.log(first.textContent)
console.log(last.textContent)