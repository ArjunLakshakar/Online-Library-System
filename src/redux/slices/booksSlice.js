import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Books } from '../../components/Data';

const BooksData = Books;
const Book = JSON.parse(localStorage.getItem('books')) || [...BooksData];

const initialState = {
  books: Book,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({ ...action.payload, id: uuidv4() });
      // Save updated books to localStorage
      localStorage.setItem('books', JSON.stringify(state.books));

    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
