async function getRandomEmoji(){
    const response = await fetch('http://localhost:3000/emojis')
    if (response.ok) {
        const data = await response.json()
        displayOnTheDom(data)
    }
}

function displayOnTheDom(data) {
    const emojiSelect = document.getElementById('emojisName')
    const pEmoji = document.getElementById('displayEmoji')
    const {emoji, correctAnswer, options} = data

    pEmoji.textContent = emoji
    options.forEach(item =>{
        const option = document.createElement('option');
        option.value = item; 
        option.text = item; 
        emojiSelect.appendChild(option);
    })

    emojiSelect.dataset.correctAnswer = data.correctAnswer;

}

getRandomEmoji()

const myForm = document.getElementById('myForm')
let score = 0

myForm.addEventListener('submit', checkData)

async function checkData(e){
    e.preventDefault()
    const formData = new FormData(myForm)

    const userAnswer = formData.get('emojisName')
    const correctAnswer = document.getElementById('emojisName').dataset.correctAnswer;

    const data = {
        userAnswer,
        correctAnswer
    }

    const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json()
    if(result){
        score ++
        alert(`Correct ! Your score is ${score} `)
    } else {
        alert(`Incorrect ! The correct name is ${correctAnswer}, your score is ${score}`)
    }
   
    const emojiSelect = document.getElementById('emojisName')
    emojiSelect.innerHTML= ''
    getRandomEmoji()

}