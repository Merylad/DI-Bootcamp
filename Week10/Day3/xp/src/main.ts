// EX1

type Person = {
  name : string,
  age : number
}

type Address = {
  street : string,
  city : string
}

type PersonWithAddress = Person & Address
const johnPerson : PersonWithAddress = {
  name: 'John',
  age : 30,
  street : 'Betsalel',
  city : 'Tel Aviv'
}

//EX2

const describeValue = (value : number| string) : string => {
  return typeof value === 'number' ? `This is a number` : `This is a string`
}
console.log (describeValue('hello'))
console.log (describeValue(1))

//EX3
let someValue : any = 3
let stringValue : string = someValue as string
console.log(stringValue)

//EX4

function getFirstElement(arr: (number | string)[]): string {
  return arr[0] as string;
}

console.log(getFirstElement(["hello", 42])); // Output: "hello"

//EX5
function logLength<T extends { length: number }>(input: T): string {
  return`Length: ${input.length}`;
}


console.log(logLength("Hello, world!")); 
console.log(logLength([1, 2, 3, 4, 5])); 
console.log(logLength({ length: 10 })); 
// console.log(logLength(5)); //Error 

//EX6
type Person = {
  name : string,
  age : number
}
type Job = {
  position : string,
  department : string
}

type Employee = Person & Job

const describeEmployee = (employee : Employee) : string => {
 return  employee.position === 'manager' ? `${employee.name} is a manager` : `${employee.name} is a developper` 
}

const johnEmployee : Employee = {
  name : 'John',
  age : 30,
  position : 'manager',
  department: 'DI'
}

console.log(describeEmployee(johnEmployee))

//EX7
function formatInput<T extends { toString(): string }>(input: T): string {
  
  const formattedString = input.toString() as string;
  return `Formatted: ${formattedString}`;
}
console.log(formatInput(42))
console.log(formatInput([1, 2, 3]))