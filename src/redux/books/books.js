import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const transform = (data) => {
  const arr = Object.entries(data);
  let result = [];
  arr.forEach((item) => {
    const itemId = item[0];
    const book = item[1][0];
    book.item_id = itemId;
    result = [...result, book];
  });
  return result;
};

// Actions
const BOOK_ADDED = 'ADD_BOOK/requestStatus';
const BOOK_REMOVED = 'REMOVED_BOOK/requestStatus';
const BOOKS = 'BOOKS/requestStatus';
export const url = (id = '') => `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Qf3rTrhGNg4ve0WH5XO8/books/${id}`;

// Action creators
export const doAddBook = createAsyncThunk(
  BOOK_ADDED,
  async (book) => {
    const response = await axios.post(url(), book);
    const data = await response.data;
    return { book, data };
  },
);

export const doRemoveBook = createAsyncThunk(
  BOOK_REMOVED,
  async (id) => {
    const response = await axios.delete(url(id), { item_id: id });
    const message = await response.data;
    return { id, message };
  },
);

export const fetchBookList = createAsyncThunk(
  BOOKS,
  async () => {
    const response = await axios.get(url());
    const bookList = await response.data;
    const bookArray = transform(bookList);
    return bookArray;
  },
);

// Reducer
const initialState = [];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS/requestStatus/fulfilled':
      return action.payload;
    case 'ADD_BOOK/requestStatus/fulfilled':
      return [...state, action.payload.book];
    case 'REMOVED_BOOK/requestStatus/fulfilled':
      return state.filter((book) => book.item_id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
