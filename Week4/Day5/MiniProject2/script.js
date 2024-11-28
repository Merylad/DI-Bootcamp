let section = document.getElementById('container')
let goodKeys = [65,83,68,70,71,72,74,75,76]

let divs = section.children

for (let div of divs){
    
    div.addEventListener('click', function(e){
        e.preventDefault()
        let key = this.getAttribute('data-key')
        playMusic(key)
    } )
}

window.addEventListener('keydown', function(e){
    e.preventDefault()
    let key = e.keyCode
    playMusic(key)


})

function playMusic(keyCode){
    var note = document.querySelector("audio[data-key='"+keyCode+"']");
	note.currentTime = 0;  
	note.play();
    

}
