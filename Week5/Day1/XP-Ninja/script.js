// Exercise 1 : Merge Words

// function mergeWords(initialWord) {
//     let sentence = initialWord;

//     function addWord(nextWord) {
//         if (!nextWord) {
//             return sentence; 
//         }
//         sentence += ` ${nextWord}`;
//         return addWord; 
//     }

//     return addWord;
// }

// console.log(mergeWords('There')('is')('no')('spoon.')())


// function mergeWords(string) {
//     function addWord (nextString) {
//       if (nextString === undefined) {
//         return string;
//       } else {
//         return mergeWords(string + ' ' + nextString);
//       }
//     }
//     return addWord
//    }

//    console.log(mergeWords('There')('is')('no')('spoon.')())