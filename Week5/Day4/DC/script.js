let myForm = document.getElementById('myForm')
let data = document.getElementById('data')
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')

myForm.addEventListener('submit', getData)

function getData(event){
    event.preventDefault()
    let myObj = {
        name : fname.value ,
        lastname : lname.value 
    }

    let JsonMyObj = JSON.stringify(myObj)

    let p = document.createElement('p')
    p.textContent = JsonMyObj
    data.appendChild(p)

}