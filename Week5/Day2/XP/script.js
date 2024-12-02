// 🌟 Exercise 1 : Colors

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((val, i) =>{
//     console.log(`${i}# choice is ${val}`)
// })

// if (colors.some(val => val == 'Violet')){
//     console.log('Yeah!')
// } else {
//     console.log('No...')
// }

// 🌟 Exercise 2 : Colors #2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.forEach((val, i) => {
//     let position = i+1
//     let suffix = ''
//     position == 1 || i ==2 || i ==3 ? suffix = ordinal [position] :
//     suffix = ordinal [0]
//     console.log(`My ${position}${suffix} choice is ${val}`)
    
// })

// Exercise 3 : Analyzing
// My prevision : ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

//previson  ['U', 'S', 'A']
// const country = "USA";
// console.log([...country]);
//  ['U', 'S', 'A']

// prevision : ?????
// let newArray = [...[,,]];
// console.log(newArray);
//  [undefined, undefined]

// 🌟 Exercise 4 : Employees
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//     { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//     { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//     { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//     { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//     { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// let welcomeStudents = users.map (val => {
//    return 'Hello ' + val.firstName
// })

// console.log(welcomeStudents)

// let fullStack = users.filter (student => student.role == 'Full Stack Resident').map(student => student.firstName)

// console.log(fullStack)

// 🌟 Exercise 5 : Star Wars
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// let str = epic.reduce ((acc, val) => acc + ' '+ val )

// console.log(str)

// 🌟 Exercise 6 : Employees #2
// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//     {name: "Liam", course: "Computer Science", isPassed: false}, 
//     {name: "Jenner", course: "Information Technology", isPassed: true}, 
//     {name: "Marco", course: "Robotics", isPassed: true}, 
//     {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//     {name: "Jamie", course: "Big Data", isPassed: false}];

// let passedStudents = students.filter(student => student.isPassed == true)
// console.log(passedStudents)

// passedStudents.forEach(student =>{
//     console.log(`Good job ${student.name} you passed the course in ${student.course}`)
// })