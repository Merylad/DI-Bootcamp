//EX 1 

const HelloWorld = () : string => {
   return ('Hello World !')
}
console.log(HelloWorld())

//EX 2

let age : number = 1
let name1 : string = 'John'

console.log(age)
console.log(name1)

//EX3

type StrOrNum = string | number
let id : StrOrNum
id = 1
id = 'abc123'

//EX4 
const isPositive = (num : number) : string => {
   if (num > 0 ) {
      return 'positive'
   } else if (num == 0) {
      return 'zero'
   }
   return 'negative'
}

console.log(isPositive(0))
console.log(isPositive(5))
console.log(isPositive(-5))

//EX5

const getDetails =(name : string, age : number) : [string, number, string] => {
   return [name, age, `Hello ${name}! You are ${age} years old.`]
}
console.log(getDetails('Alice', 25))

//EX6

type Person = {
   name : string
   age : number
}

const createPerson = (name : string, age :number) : Person => {
   return {name, age}
}

console.log(createPerson('John', 30))

//EX7
// let element = document.getElementById('myinput')
// let inputElement = element as HTMLInputElement
// inputElement.value = 'Hello World!'
// console.log(inputElement)

//EX8

function getAction(role: string): string {
   switch (role) {
     case "admin":
       return "Manage users and settings";
     case "editor":
       return "Edit content";
     case "viewer":
       return "View content";
     case "guest":
       return "Limited access";
     default:
       return "Invalid role";
   }
 }

 console.log(getAction("admin"));   
console.log(getAction("editor"));  
console.log(getAction("viewer"));  
console.log(getAction("guest"));  
console.log(getAction("unknown"));

//EX9

const greetings = (name? :string) : string => {
   if (name) {
      return `Hello ${name}`
   }
   return `Hello!`
}

console.log(greetings())
console.log(greetings('Naomie'))