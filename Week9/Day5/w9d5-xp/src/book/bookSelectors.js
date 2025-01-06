import { createSelector } from '@reduxjs/toolkit';

const allBooks = state => state.bookReducer.books;

export const selectHorrorBooks = createSelector([allBooks], books => books.filter(book => book.genre === 'Horror') )
export const selectFantasyBooks = createSelector([allBooks], books => books.filter(book => book.genre === 'Fantasy'))
export const selectScienceFictionBooks = createSelector([allBooks], books => books.filter(book => book.genre === 'Fiction'))

