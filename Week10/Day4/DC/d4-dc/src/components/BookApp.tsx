import { ReactElement, useState } from "react"
import List from "./List"
import {v4 as uuidv4} from 'uuid'

export type Book = {
    id : string | number,
    title : string,
    author : string
  }

const initialState :Book[] = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 5, title: "Moby-Dick", author: "Herman Melville" },
    { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { id: 7, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { id: 8, title: "Animal Farm", author: "George Orwell" },
    { id: 9, title: "Brave New World", author: "Aldous Huxley" },
    { id: 10, title: "Jane Eyre", author: "Charlotte Brontë" },
  ]

const BookApp = () : ReactElement => {
    const [books, setBooks] = useState<Book[]>(initialState)
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");

    const addBook = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    
        if (!title.trim() || !author.trim()) return;
    
        const newBook: Book = {
          id: uuidv4(),
          title,
          author,
        };
    
        setBooks([...books, newBook]);
        setTitle(""); 
        setAuthor("");
      };

    return (
        <>
        <h2>Book App</h2>
        <List books = {books} />
        <form onSubmit={addBook}>
            <h3>Add a new Book</h3>
            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" value='Add a book' />
        </form>
        </>
    )
}

export default BookApp