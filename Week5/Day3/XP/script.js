// 🌟 Exercise 1 : Location

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// //prevision I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// 🌟 Exercise 2: Display Student Info

// function displayStudentInfo(objUser){
//     const {first, last} = objUser
//     console.log(`Your full name is ${first +' '+ last}`)

// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

// 🌟 Exercise 3: User & id

// const users = { user1: 18273, user2: 92833, user3: 90315 }

// let usersArr = Object.entries(users)
// console.log(usersArr)

// usersArr.forEach(user =>
//     user[1] *=2
// )
// console.log(usersArr)

// Exercise 4 : Person class
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');

//   //prevision object
//   console.log(typeof member);

// 🌟 Exercise 5 : Dog class
class Dog {
    constructor(name) {
      this.name = name;
    }
  };

//   answer 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

//   Exercise 6 : Challenges
// [2] === [2] prevision false reality false
// {} === {} prevision false reality error

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number) //4 bc it is a clone
// console.log(object3.number) //also 4
// console.log(object4.number) //5 it is a copy

class Animal {
    constructor(name, type, color){
        this.name = name
        this.type = type
        this.color = color
        
    }
}

class Mammal extends Animal {
    constructor (name, type, color,){
        super (name, type, color)
    }

    sound(noise){
        return `The ${this.color} ${this.type} named ${this.name} make this sound : ${noise}`
    }
}

const farmerCow = new Mammal('Lily', 'cow', 'brown')
console.log(farmerCow.sound('Mooooooooo'))