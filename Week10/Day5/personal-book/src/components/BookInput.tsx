import { ReactElement } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { FormEvent } from "react"
import { useDispatch } from "react-redux"
import {v4 as uuidv4} from 'uuid'
import { addBook } from "../features/bookSlice"
import { BookI } from "../model/Book"
import BookList from "./BookList"

const BookInput = () : ReactElement => {
    const categories = useSelector((state:RootState) => state.bookReducer.categories)
    const books = useSelector((state:RootState) => state.bookReducer.books)
    const dispatch = useDispatch()

    const handleAddBook = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const titleInput = document.getElementById('title') as HTMLInputElement
        const title = titleInput.value

        const authorInput = document.getElementById('author') as HTMLInputElement
        const author = authorInput.value

        const categorySelect = document.getElementById('category') as HTMLSelectElement
        const category = categorySelect.value

        if (!title.trim() || !author.trim() || category === '-1') return

        const newBook : BookI ={
            id: uuidv4(),
            title,
            author,
            category
        }

        dispatch(addBook(newBook))

    }

    return(
        <>
            <form onSubmit={handleAddBook} id="addBookForm">
            <input type="text" placeholder="title" id="title" name="title"/>
            <input type="text" placeholder="author" id="author" name="author"/>
            <select name="category" id="category" >
                <option value="-1">- Chose a categorie -</option>
                {categories.map(cat => {
                    return(
                        <option value={cat.id} key={cat.id}>{cat.name}</option>
                    )
                })}
            </select>
            <input type="submit" value='Add a book' />
            </form>

            <BookList books = {books} categories={categories}/>
        </>
    )
}

export default BookInput