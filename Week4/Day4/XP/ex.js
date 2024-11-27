// EX1


// let h1 = document.getElementsByTagName('h1')[0]
// console.log(h1)

// let article = document.getElementsByTagName('article')[0]

// let lastChild = article.lastElementChild

// article.removeChild(lastChild)

// let h2 = article.children[1]
// let h3 = article.children[2]



// h2.onclick = function () {
//     h2.style.backgroundColor = 'red'
// }

// h3.onclick = function () {
//     h3.style.display = 'none'
// }

// function bold(){
//     allP = document.getElementsByTagName('p')
//     for (let p of allP){
//         p.style.fontWeight = 'bold'
//     }
    
// }

// h1.onmouseover = function () {
//     let num = Math.floor(Math.random() * 101)
//     h1.style.fontSize = `${num}px`
// }

// h2.style.opacity = '50%'

// h2.onmouseover = function () {
//     h2.style.opacity = '100%'
//     h2.style.transition = 'opacity 5s'
// }


// EX2

// let form = document.forms[0]
// console.log(form)

// let fname = document.getElementById('fname')
// let lname = document.getElementById('lname')

// console.log(fname)
// console.log(lname)

// let fname1 = document.getElementsByName('firstname')[0]
// console.log(fname1)
// let lname1 = document.getElementsByName('lastname')[0]

// form.addEventListener('submit', getUserInfo)

// function getUserInfo(e){
//     e.preventDefault() 
//     // to prevent reloading the page
//     let userFN = fname.value
//     let userLN = lname.value
//     if (userFN === '' || userLN === ''){
//         alert('You can not submit an empty field')
//     } else {
//         liFN = document.createElement('li')
//         liLN =  document.createElement('li')
//         liFN.textContent = `Your first name is ${userFN}`
//         liLN.textContent = `Your last name is ${userLN}`

//         usersAnswer = document.getElementsByClassName('usersAnswer')[0]
//         usersAnswer.appendChild(liFN)
//         usersAnswer.appendChild(liLN)
//     }
// }

// EX3

// let allBoldItems = []
// let boldElements = document.getElementsByTagName('strong')
// let paragraph = document.getElementsByTagName('p')[0]
// console.log(paragraph)


// function getBoldItems(){
//     for (let element of boldElements){
//         allBoldItems.push(element.textContent)
//     }
//     console.log(allBoldItems)

// }
// getBoldItems()

// function highlight(){
//     for (let element of boldElements){
//         element.style.color = 'blue'
//     }
// }
// // highlight()

// function returnItemsToDefault() {
//     for (let element of boldElements){
//         element.style.color = 'black'
//     }
// }
// // returnItemsToDefault()

// paragraph.onmouseover = highlight
// paragraph.onmouseout = returnItemsToDefault

// EX4

let myForm = document.getElementById('MyForm');
let radiusInput = document.getElementById('radius');
let volumeInput = document.getElementById('volume');
let btn = document.getElementById('submit');

btn.onclick = function (e){
    e.preventDefault(); 

    
    let radius = parseFloat(radiusInput.value); 

    if (isNaN(radius) || radius <= 0) {
        
        alert("Please enter a valid positive number for radius.");
        return;
    } 

    
    let myVolume = (4 / 3) * Math.PI * radius**3;

    
    volumeInput.value = myVolume
}