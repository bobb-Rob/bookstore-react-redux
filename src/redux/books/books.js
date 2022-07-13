/* eslint-disable */
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
const BOOK_FETCHED = 'BOOK_FETCHED';
export const url = (id = '') => `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Qf3rTrhGNg4ve0WH5XO8/books/${id}`

// Action creators
export const doAddBook = (book) => ({ type: BOOK_ADDED, payload: book });
export const doRemoveBook = (id) => ({ type: BOOK_REMOVED, id });
export const doBookFetch = (books) => ({type: BOOK_FETCHED, payload: books })

export const fetchBookList = () => {
  return (dispatch) => {
    axios.get(url()).then((list) => {     
      const data = reOrganizeData(list.data)      
      dispatch(doBookFetch(data))
      return list;
    })
  }
}

// Reducer
const initialState = [];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_FETCHED:
      console.log(action.payload)
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
