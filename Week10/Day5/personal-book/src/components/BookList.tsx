import { ReactElement } from "react"
import { BookI, CategoryI } from "../model/Book"

type BookListProps = {
    books : BookI[],
    categories : CategoryI[]
}

const BookList = ({books, categories} :BookListProps) : ReactElement => {
    console.log(books)
    return(
        <>
            <h2>Book List</h2>
        </>
    )
}

export default BookList