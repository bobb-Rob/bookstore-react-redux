/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBookForm from './AddBookForm';

const Books = () => {
  const books = useSelector((state) => state.books);
 
  console.log(books)
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            title={ book.title }
            key={book.id}
            author={ book.author }
            id={book.id}
          />
          ))}
      </ul>
      <AddBookForm />
    </div>
  );
};
export default Books;
