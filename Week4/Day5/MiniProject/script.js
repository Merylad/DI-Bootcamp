let pixels = document.getElementById('drawing').children
let colors = document.getElementById('pickColor').children
let clearBtn = document.getElementById('clearBtn')
let userColor = ''
let hasClicked = false

for (let color of colors){
    color.addEventListener('click', function(e){
        userColor = e.target.style.backgroundColor
    })
}

clearBtn.onclick = function () {
    for (let pixel of pixels){
        pixel.style.backgroundColor='lightgray'
    }
}

for (let pixel of pixels){
    pixel.addEventListener('mousedown', function(e){
        e.preventDefault()
        pixel.style.backgroundColor = userColor
        hasClicked = true
    })
    pixel.addEventListener('mouseenter', function(e){
        e.preventDefault()
        if(hasClicked == true){
            pixel.style.backgroundColor = userColor
        }
        
    })
    pixel.addEventListener('mouseup', function(e){
        e.preventDefault()
        hasClicked = false
    })
}
