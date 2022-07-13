/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookList } from '../redux/books/books';
import Book from './Book';
import AddBookForm from './AddBookForm';

const Books = () => {
  const books = useSelector((state) => state.books); 
  const dispatch = useDispatch();

  console.log(books)
  useEffect(() => {
    dispatch(fetchBookList())
  },[]);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            title={book.title}
            key={book.item_id}
            author={book.author}
            id={book.item_id}
          />
        ))}
      </ul>
      <AddBookForm />
    </div>
  );
};
export default Books;
