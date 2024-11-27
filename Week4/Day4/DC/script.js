let myform = document.getElementById('libform')
let story = document.getElementById('story')

myform.addEventListener('submit', labIt)




function labIt(e){
    e.preventDefault()
    let noun = document.getElementById('noun').value
    let adjective = document.getElementById('adjective').value
    let person = document.getElementById('person').value 
    let verb = document.getElementById('verb').value 
    let place = document.getElementById('place').value
    story.textContent = `${person} is absolutly ${adjective}! ${person} wants to ${verb} a ${noun} in ${place}`
    
}