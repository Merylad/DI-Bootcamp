import { configureStore } from "@reduxjs/toolkit";
import bookReducer from '../features/bookSlice'
import Book from "../model/Book";
import { CategoryI } from "../model/Book";

const store = configureStore({
    reducer : {
        bookReducer
    }
})

export interface RootState {
    bookReducer: {
      books: Book[];
      categories: CategoryI[];
    };
  }

export default store

