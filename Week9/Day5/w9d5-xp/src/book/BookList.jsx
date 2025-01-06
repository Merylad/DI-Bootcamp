import { useSelector } from "react-redux"
import { useState } from "react"
import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from "./bookSelectors"

const BookList = () => {
    const allBooks = useSelector(state => state.bookReducer.books)
    const [selectedGenre, setSelectedGenre] = useState("")
    
    
    const horrorBooks = useSelector(selectHorrorBooks)
    const fantasyBooks = useSelector(selectFantasyBooks)
    const fictionBooks = useSelector(selectScienceFictionBooks)
    let selectBooks = [];
    if (selectedGenre === "fiction") {
        selectBooks = fictionBooks;
    } else if (selectedGenre === "horror") {
        selectBooks = horrorBooks;
    } else if (selectedGenre === "fantasy") {
        selectBooks = fantasyBooks;
    } else if (selectedGenre === "all"){
        selectBooks = allBooks
    }
    return(
        <>
            <h3>Book List</h3>
            <select name="genre" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                <option value="">Chose a book genre</option>
                <option value="fiction">Science-Fiction</option>
                <option value="horror">Horror</option>
                <option value="fantasy">Fantasy</option>
                <option value="all">All Books</option>
            </select>
            {selectBooks.map(book => {
                return (
                    <div key={book.id}>
                        <h4>{book.title}</h4>
                        <h6>By {book.author}</h6>
                        <p>Genre : {book.genre}</p>
                    </div>
                )
            })}
        </>
    )
}

export default BookList