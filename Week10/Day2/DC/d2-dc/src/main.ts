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