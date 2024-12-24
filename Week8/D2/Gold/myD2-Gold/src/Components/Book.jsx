import { useState } from "react"

const Book = () => {
    const [bookInfo, setBookInfo] = useState({})
    const [successMessage, setSuccessMessage] = useState('')
    console.log(bookInfo)
   
    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const author = e.target.author.value 
        const genre = e.target.genre.value 
        const year_published = e.target.year.value 

        const info = {title, author, genre, year_published}

        setBookInfo(info)
        setSuccessMessage('Data sent !')
    }

    


    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>New Book</h1>
                <p>{successMessage} </p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" /> <br />
                <label htmlFor="author">Author</label>
                <input type="text" id="author" name="author" /><br />
                <label htmlFor="genre">Genre</label>
                <input type="text" id="genre" name="genre" /><br />
                <label htmlFor="year">Year Published</label>
                <input type="text" id="year" name="year" /><br />
                <input type="submit" value='Submit' />
                
            </form>
        </>
    )
}

export default Book