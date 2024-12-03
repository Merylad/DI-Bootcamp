// Exercise 1 : Analyzing the map method

// prevision : [ 2, 4, 6 ]
// let a = [1, 2, 3].map(num => {
//     if (typeof num === 'number') return num * 2;
//     return ;
//   });

// console.log(a) [ 2, 4, 6 ]

// Exercise 2: Analyzing the reduce method
// prevision ???
// let a = [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2],
//   );
// console.log(a) [ 1, 2, 0, 1, 2, 3 ]

// Exercise 3 : Analyze this code
// prevision = [ 2, 4, 8, 10, 16, 18 ]
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     return num * 2;
// })
// console.log(newArray) [ 2, 4, 8, 10, 16, 18 ]

// Exercise 4 : Nested arrays

const array = [[1],[2],[3],[[[4]]],[[[5]]]]

let flatArray = array.flat(2)
console.log(flatArray)

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
let flatGreeting = greeting.map(element => element.join(' '))
let str = flatGreeting.join(' ')
console.log(flatGreeting)
console.log(str)

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
const three = trapped.flat(25)
console.log(three)