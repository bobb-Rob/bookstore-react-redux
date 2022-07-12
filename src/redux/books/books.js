// Actions
const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';

// Action creators
export const doAddBook = (book) => ({ type: BOOK_ADDED, payload: book });
export const doRemoveBook = (id) => ({ type: BOOK_REMOVED, id });

// Reducer
const initialState = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    id: '1',
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    id: '2',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    id: '3',
  },

];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ADDED:
      return [...state, action.payload];
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
