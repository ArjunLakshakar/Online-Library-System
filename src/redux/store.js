import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice';

const store = configureStore({
    reducer: {
        books: booksReducer,
    },
});

// store to localStorage
store.subscribe(() => {
    localStorage.setItem('books', JSON.stringify(store.getState().books.books));
});

export default store;
