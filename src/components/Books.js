/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Circle } from 'better-react-spinkit';
import { fetchBookList, STOPLOADING } from '../redux/books/books';
import { endTheBar } from '../services/loadingBarService';
import Book from './Book';
import AddBookForm from './AddBookForm';
import './styles/books.css';

const Books = () => {  
  const { books, isLoading } = useSelector((state) => state);
  console.log(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookList()).then((data) => {
      if (data.type === 'BOOKS/requestStatus/fulfilled') {
        endTheBar();
      }
    });
  }, []);

  return (
    <div>
      <ul className="books-container">
        {books.map((book) => (
            <Book
              title={book.title}
              key={book.item_id}
              author={book.author}
              category={book.category}
              id={book.item_id}
            />
          ))}
      </ul>
      <AddBookForm />
    </div>
  );
};
export default Books;
