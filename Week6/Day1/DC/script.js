// 1st daily challenge

// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

function makeAllCaps (arr) {
    let isString = arr.every(item => typeof item === 'string')

    let myPromise = new Promise ( (resolve, reject) => {
        if (isString){
            let newArr = arr.map(item => item.toUpperCase())
            resolve(newArr)
        } else {
            reject('This is not a correct array')
        }
    })

    return myPromise
}


function sortWords (arr) {
    let myPromise = new Promise((resolve, reject) => {
        if (arr.length > 4) {
            let newArr = arr.sort()
            resolve (newArr)
        } else{
            reject ('This array is too short')
        }
    })
    return myPromise
}

// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))


// 2nd daily challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJS (str) {
    return new Promise((resolve, reject) => {
        if (str.length > 0) {
            resolve(JSON.parse(str))
        } else{
            reject ('This is an empty str')
        }
    })
  }

function toMorse (morseJS) {
    let word = prompt('Write a word').toLowerCase().split('')
    let myPromise = new Promise((resolve, reject) => {
        if ( word.every(letter => Object.keys(morseJS).includes (letter)) ){
            let arr = []
            word.forEach(letter => arr.push(morseJS[letter]))
            resolve ([word.join(''), arr])
        } else{
            reject ('This is not a valid string')
        }
    })
    return myPromise
    
}

let sectionMorse = document.getElementById('morse')

function joinWords() {
    toJS(morse)
    .then (result => toMorse (result))
    .then (result => {
        let p = document.createElement('p')
        p.innerHTML = `The word '${result[0]}' gives you : <br> ${result[1].join('<br>')}`
        sectionMorse.appendChild(p)
        console.log(`The word '${result[0]}' gives you : \n ${result[1].join('\n')}`)
    } )
    .catch (err => console.log(err))
}

joinWords()
