import React from 'react';
import { useSelector } from 'react-redux';
// import { fetchBookList } from '../redux/books/books';
import Book from './Book';
import AddBookForm from './AddBookForm';
import './styles/books.css';

const Books = () => {
  const books = useSelector((state) => state.books);
  console.log(books);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchBookList());
  // }, []);

  return (
    <div>
      <ul className="books-container">
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
