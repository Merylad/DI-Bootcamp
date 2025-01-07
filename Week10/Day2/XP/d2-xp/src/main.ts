//EX1

class Employee {
  constructor (
    private name : string, 
    private salary : number,
    public position : string,
    protected department : string
  ){}

  getEmployeeInfo(){
    return `The employee ${this.name} is in the position ${this.position}`
  }
}

const employee1 = new Employee ('John', 2000, 'Devlopper', 'dpt 1')
console.log(employee1.getEmployeeInfo())

//EX2

class Product {
  constructor(
    readonly id : number,
    public name : string,
    public price : number
  ){}

  getProductInfo() {
    return `The product ${this.name} costs ${this.price}$`
  }
}

const product1 = new Product (1, 'Iphone', 500)
console.log(product1.getProductInfo())
// product1.id = 2 //impossible

//EX3
class Animal {
  constructor (
    public name : string
  ) {}

  makeSound():string{
    return `Some sound`
  }
}

class Dog extends Animal {
  constructor (name : string){
    super(name)
  }

  makeSound():string{
    return `${this.name} barks WOUF!`
  }
}

const fluffy = new Dog ('Fluffy')
console.log(fluffy.makeSound())

//EX4
class Calculator {
  static add (a: number, b: number) : number{
    return a+b
  }
  static substract (a: number, b: number) : number{
    return a-b
  }
}

console.log(Calculator.add(3,4))
console.log(Calculator.substract(3,4))

//EX5
interface User {
  readonly id : number,
  name : string,
  email : string
}

interface PremiumUser extends User {
  membershipLevel ? :string
}

function PrintUserDetails (person : PremiumUser){
  if (person.membershipLevel){
  return `${person.name} is a ${person.membershipLevel} member `
  
  }
  return `${person.name}, ${person.email} , ${person.id}`
}

const person1 :PremiumUser = {
  id: 1,
  name : 'John',
  email : 'John@gmail.com',
  membershipLevel : 'Senior'
}

console.log(PrintUserDetails(person1))