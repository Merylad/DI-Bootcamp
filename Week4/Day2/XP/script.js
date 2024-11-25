// 🌟 Exercise 1 : List of people

// const people = ["Greg", "Mary", "Devon", "James"];

// people.splice(0,1);

// people.splice(2,1, 'Jason');
// people.push('Meryl');
// let index = people.indexOf('Mary')
// console.log(index)

// let copy = people.slice(1,3)
// console.log(copy)

// console.log(people);
// console.log(people.indexOf('Foo'))  //it does not exist

// let last = people[people.length -1]
// console.log(last)

// for (let person of people ){
//     console.log(person)
// }

// for (let person of people ){
//     console.log(person)
//     if (person == 'Devon') break
// }

// 🌟 Exercise 2 : Your favorite colors

let colors = ['blue', 'pink', 'red', 'green', 'white']
let suffix = ['st', 'nd', 'rd', 'th', 'fth']

// for (let i in colors) {
//     console.log(`my #${i} choice is ${colors[i]}`)
// }

// for (let i in colors){
//     console.log(`my ${parseInt(i) + 1}${suffix[i]} choice is ${colors[i]}`)
// }

// 🌟 Exercise 3 : Repeat the question

// while (true){
//     let num = prompt('Enter a number')
//     if (parseInt(num) > 10) break

// }


// 🌟 Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// console.log(building.numberOfFloors)

// console.log(building.numberOfAptByFloor.firstFloor)

// console.log(building.numberOfAptByFloor.thirdFloor)

// console.log(building.nameOfTenants[1])

// console.log(building.numberOfRoomsAndRent.dan[0])

// if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
//     building.numberOfRoomsAndRent.dan[1] = 1200
// }

// console.log(building.numberOfRoomsAndRent.dan[1])

// 🌟 Exercise 5 : Family

let family = {
    lastName : 'adjedj',
    membersNum : 4,
    city : 'Givat Shmuel'
}

// for (let x in family){
//     console.log(x)
// }

// for (let x in family){
//     console.log(family[x])
// }

// Exercise 6 : Rudolf

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }

let str = []
for (let x in details){
    str.push(x, details[x])
}

// console.log(str.join(' '))

// Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const firstLetter = []

for (let name of names) {
    firstLetter.push(name[0])
}

societyName = firstLetter.sort().join('')

console.log(societyName)