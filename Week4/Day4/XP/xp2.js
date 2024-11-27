// EX1

// function hello () {
//     alert('Hello World')
// }

// // setTimeout(hello, 2000)

// container = document.getElementById('container')

// function createP () {
//     let p = document.createElement('p')
//     p.textContent = 'Hello World'
//     container.appendChild(p)
// }

// // setTimeout(createP, 2000)

// let newP = setInterval(function (){
//     createP()
//     if(container.children.length>=5){
//         clearInterval(newP)
//     }
// }, 2000)



// let btn = document.getElementById('clear')

// btn.onclick = function (){
//     clearInterval(newP)
// }

// EX2

function myMove (){
    let box = document.getElementById('animate')
    let pos = 0
    let move = setInterval(function (){
        if (pos >= 350){
            clearInterval(move)
        }else{
            pos ++ 
            box.style.left = `${pos}px`
        }
    },1)
}
