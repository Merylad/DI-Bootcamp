interface Book {
  title : string,
  author : string,
  isbn : string,
  publishedYear : number,
  genre ? : string
}

class Library {

  constructor (private books : Book[]){
    this.books = []
  }

  public addBook (book : Book) : void{
    this.books.push(book)
  }

  public getBookDetail (isbn : string) : string {
    const book = this.books.find (item => item.isbn === isbn)
    if (book) {
      return `${book.title} by ${book.author} published in ${book.publishedYear}`
    }
    return `No book find in the library with ISBN ${isbn}`
  }
}

const library = new Library([]);


library.addBook({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  isbn: "123456789",
  publishedYear: 1960,
  genre: "Fiction",
});

library.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "987654321",
  publishedYear: 1949,
});

// Getting book details
console.log(library.getBookDetail("123456789"));
console.log(library.getBookDetail("111111111"));

class DigitalLibrary extends Library {
  constructor(
    private books : Book[],
    readonly website : string
  ){
    super(books)
  }

  listBooks () : string[]{
    const titles : string[] = []
    this.books.forEach (item => titles.push(item.title))
    return titles
  }
}

const digitLibrary = new DigitalLibrary ([], 'www.mywebsite.com')
digitLibrary.addBook({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  isbn: "123456789",
  publishedYear: 1960,
  genre: "Fiction",
})

digitLibrary.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "987654321",
  publishedYear: 1949,
})

console.log(digitLibrary.listBooks())


//XP GOLD

//EX1
class Employee {
  constructor(
    protected name : string,
    protected salary : number
  ){}

  getDetails () : string {
    return `${this.name} is earning ${this.salary} dollars`
  }
}

class Manager extends Employee {
  constructor(name : string, salary : number, public department : string){
    super(name, salary)
  }

  getDetails(): string {
     return `${this.name} is earning ${this.salary} dollars in the department ${this.department}`
  }
}

const manager1 = new Manager ('John', 3000, 'developper')
console.log(manager1.getDetails())

//EX2

class Car {
  constructor (
    public readonly  make : string,
    private readonly model : string, 
    public year : number
  ){}

  getCarsDetails () : string {
    return `The ${this.make} ${this.model} is from ${this.year}`
  }
}

const myCar = new Car ('Suzuki', 'ASX', 2022)
console.log(myCar.getCarsDetails())
// myCar.model = '' //impossible bc readonly 

//EX3
class MathUtils {
  static PI : number = 3.14159

  static getCircumference (radius : number) : number {
    return 2*MathUtils.PI*radius
  }
}

console.log(MathUtils.getCircumference(3))

//EX4
interface OperationI {
  execute(a: number, b:number) : number
}

class Addition implements OperationI {
   execute(a:number, b:number) : number{
    return a+b
  }
}

class Muliplication implements OperationI {
   execute(a:number, b:number) : number{
    return a*b
  }
}

const add = new Addition
const mult = new Muliplication
console.log(add.execute(3,4))
console.log(mult.execute(3,4))

//EX5
interface Shape {
  color : string,
  getArea():number
}

interface Rectangle extends Shape {
  readonly width : number,
  readonly height : number,
  getPerimeter() : number
}

class Quadrilateral implements Rectangle {
  constructor (
    public color : string,
    readonly width : number,
    readonly height : number
  ){}

  getArea(): number {
    return this.width * this.height
  }

  getPerimeter(): number {
    return (this.height + this.width) *2
  }
}

const square = new Quadrilateral('yellow', 3, 3)
console.log(square.getArea())
console.log(square.getPerimeter())