import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Book from "../model/Book";
import { CategoryI, BookI } from "../model/Book";

interface BookState{
    books : BookI[],
    categories : CategoryI[]
}

const initialState: BookState = {
    books: [
        {
            id: 1,
            title: '1984',
            author: 'George Orwell',
            category: 'Dystopian',
            isRead: true,
        },
        {
            id: 2,
            title: 'Brave New World',
            author: 'Aldous Huxley',
            category: 'Dystopian',
            isRead: false,
        },
        {
            id: 3,
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            category: 'Fiction',
            isRead: true,
        },
        {
            id: 4,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            category: 'Fiction',
            isRead: false,
        },
    ],
    categories: [
        { id: '1', name: 'Fiction' },
        { id: '2', name: 'Dystopian' },
        { id: '3', name: 'Science Fiction' },
        { id: '4', name: 'Non-Fiction' },
    ],
};

const bookSlice = createSlice ({
    name : 'book',
    initialState,
    reducers: {
        addBook(state, action : PayloadAction<BookI>){
            console.log(action.payload)
            state.books.push(action.payload)
        }
    },
    extraReducers(builder){}
})

export const {addBook} = bookSlice.actions
export default bookSlice.reducer

