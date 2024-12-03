// Exercise 1 : Dog age to Human years

// const data = [
//     {
//       name: 'Butters',
//       age: 3,
//       type: 'dog'
//     },
//      {
//       name: 'Cuty',
//       age: 5,
//       type: 'rabbit'
//     },
//     {
//       name: 'Lizzy',
//       age: 6,
//       type: 'dog'
//     },
//     {
//       name: 'Red',
//       age: 1,
//       type: 'cat'
//     },
//     {
//       name: 'Joey',
//       age: 3,
//       type: 'dog'
//     },
//     {
//       name: 'Rex',
//       age: 10,
//       type: 'dog'
//     },
//   ];

// let total = 0
// data.forEach(dog => {
//     total += dog.age*7

// })
// console.log(total)

// let total2 = data.reduce((acc, dog) => acc + dog.age*7,0)
// console.log(total2)

// Exercise 2 : Email
// const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '

// let userEmail = userEmail3.trim()
// console.log(userEmail)

// Exercise 3 : Employees #3
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//     { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//     { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//     { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//     { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//     { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// let users2 = {}

// users.forEach(user =>{
//     users2[`${user.firstName} ${user.lastName}`] = user.role
// })
// console.log(users2)

// Exercise 4 : Array to Object
const letters = ['x', 'y', 'z', 'z'];
const myObj = {}
for (i in letters){
    myObj[letters[i]] = letters.filter(x => x == letters[i]).length
}
console.log(myObj)

const letterCount = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1; // Increment count or initialize to 1
    return acc;
}, {}); // Start with an empty object

console.log(letterCount);