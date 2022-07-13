/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const reOrganizeData = (Data) => {
  let obj = [];
  for (const [key, value] of Object.entries(Data)) { 
    const target = value[0];   
    const source = {item_id: key}   
    const newBoj = Object.assign(target, source);    
    obj = obj.concat([newBoj])
  }
  return obj;
};

// Actions
const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
const BOOKS = 'BOOKS/requestStatus';
export const url = (id = '') => `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Qf3rTrhGNg4ve0WH5XO8/books/${id}`

// Action creators
export const doAddBook = (book) => ({ type: BOOK_ADDED, payload: book });
export const doRemoveBook = (id) => ({ type: BOOK_REMOVED, id });

export const fetchBookList = createAsyncThunk(
  BOOKS, 
  async () => {
    const response = await axios.get(url());    
    const bookList = await response.data;   
    const bookArray = reOrganizeData(bookList)   
    return bookArray; 
  }
)

// Reducer
const initialState = [];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS/requestStatus/fulfilled':      
      return action.payload;    
    case BOOK_ADDED:
      return [...state, action.payload];
    case BOOK_REMOVED:
      return state.filter((book) => book.item_id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
