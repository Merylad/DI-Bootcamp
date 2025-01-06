import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const initialState = {
    books : [
        { id: 1, title: "Dracula", author: "Bram Stoker", genre: "Horror" },
        { id: 2, title: "Frankenstein", author: "Mary Shelley", genre: "Horror" },
        { id: 3, title: "It", author: "Stephen King", genre: "Horror" },
        { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
        { id: 5, title: "1984", author: "George Orwell", genre: "Fiction" },
        { id: 6, title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction" },
        { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
        { id: 8, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy" },
        { id: 9, title: "A Game of Thrones", author: "George R.R. Martin", genre: "Fantasy" },
        { id: 10, title: "The Shining", author: "Stephen King", genre: "Horror" }
      ],
    status : ''
}

const bookSlice = createSlice({
    name : 'books',
    initialState,
    reducers: {},
    extraReducers(builder){}
})

export default bookSlice.reducer