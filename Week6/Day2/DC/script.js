let myForm = document.getElementById('myForm')
let section = document.getElementById('gifs')
let deleteAll = document.getElementById('deleteAll')

let data = new FormData (myForm)

myForm.addEventListener('submit', getGif)

async function getGif (e) {
    e.preventDefault()
    let data = new FormData (myForm)
    let category = data.get('category')

    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        const result = await response.json ()
        addToDom(result)
        

       
    } catch (e) {
        console.log (`OOOPS an error has occured : ${e}`)
    }
}

function addToDom (data) {
    let div = document.createElement('div')
    let iframe = document.createElement('iframe')
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', deleteGif)
    iframe.setAttribute('src', data.data.embed_url)
    div.appendChild(iframe)
    div.appendChild(deleteBtn)
    section.appendChild(div)
}

function deleteGif(e){
    e.preventDefault()
    let gifDiv = e.target.parentElement;
    gifDiv.remove();
}

deleteAll.addEventListener('click', function(e){
    e.preventDefault()
    section.innerHTML=''
})

