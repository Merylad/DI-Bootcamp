let allBooks = [
    {
        title : 'Harry Potter',
        author : 'JK Rowlings',
        image : 'https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg',
        alreadyRead : true
    },
    {
        title : 'Tu comprendras quand tu seras plus grande',
        author : 'Virginie Grimaldi',
        image : 'https://m.media-amazon.com/images/I/714CmHorYiL.jpg',
        alreadyRead : true
    }
]

let section = document.getElementsByClassName('listBooks')[0]

for (let book of allBooks){
    let newDiv = document.createElement('div') 
    let newImg = document.createElement('img')
    newImg.src = book['image']
    let newP = document.createElement('p')
    newP.textContent = `${book['title']} by ${book['author']}`
    

    newDiv.appendChild(newImg)
    newDiv.appendChild(newP)

    section.appendChild(newDiv)

    newImg.style.height = '200px'

    if(book['alreadyRead'] == true) {
        newP.style.color = 'red'
    }


    
}