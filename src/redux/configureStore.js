import { configureStore } from '@reduxjs/toolkit';
import booksReducer, { loadingReducer } from './books/books';
import categoriesReducer from './categories/categories';
import loadingBar from './barLoading.js/loading';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
    isLoading: loadingReducer,
    loadingBar,
  },
});

export default store;
