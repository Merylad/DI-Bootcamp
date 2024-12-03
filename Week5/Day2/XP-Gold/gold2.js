// Exercise 1: Sum elements

// function sum(array){
//     let total = 0
//     array.forEach(num => {
//         if (typeof num == 'number'){
//             total += num
//         } else {
//             total += 0
//         }
//     })
//     return total
// }

// let myArr = [1,2,3,4,5,6]
// console.log(sum(myArr))

// Exercise 2 : Remove Duplicates

// function removeDuplicate(array){
//     let newArr = []
//     array.forEach(element => {
//         if(newArr.some(e => e == element)){
//             null
//         } else{
//             newArr.push(element)
//         }
//     })
//     return newArr
// }

// let myArr2 = ['cat', 'dog', 'fish', 'cat', 'deer', 'dog']

// console.log(removeDuplicate(myArr2))

// Exercise 3 : Remove certain values
// let array = [NaN, 0, 15, false, -22, '',undefined, 47, null]

// function remove(array) {
//     let newArr = []
//     let toRemove = [NaN, 0, false, '', undefined, null]
//     array.forEach(element => {
//         if (toRemove.includes(element)){
//             null
//         }else{
//             newArr.push(element)
//         }
//     })
//     return newArr
// }

// let a = remove(array)
// console.log(a)

// Exercise 4 : Repeat please !

// function repeat(word, times){
//     let str = ''
//     for (let i = 0; i<times; i++){
//         str += word
//     }
//     return str
// }

// console.log(repeat('Ha!', 5))

// Exercise 5 : Turtle & Rabbit

// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// turtle = turtle.padStart(8, ' ')
// rabbit = rabbit.padStart(8, ' ')
// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);
// turtle = turtle.trim().padEnd(9, '='); //turtle at the beginning and 8 =
// console.log(turtle)
