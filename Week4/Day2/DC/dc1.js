let sentence = 'This dinner is not that bad ! You cook well'

let wordNot = sentence.indexOf('not')
let wordBad = sentence.indexOf('bad')


if (wordNot == -1 || wordBad == -1){
    console.log(sentence)
} else if (wordBad > wordNot) {
    let substr = sentence.substring(wordNot, wordBad + 3)
    let newSentence = sentence.replace (substr, 'good')
    console.log(newSentence)
}
