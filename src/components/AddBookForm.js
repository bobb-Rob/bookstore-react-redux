import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { doAddBook } from '../redux/books/books';
import { endTheBar } from '../services/loadingBarService';
import './styles/addBook.css';

const AddBookForm = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    item_id: uniqid(),
    category: 'Fiction',
  });
  const { title, author } = book;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBook((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addBookSubmit = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      dispatch(doAddBook(book)).then((data) => {
        if (data.type === 'ADD_BOOK/requestStatus/fulfilled') {
          endTheBar(dispatch);
          setBook({
            title: '',
            author: '',
            item_id: uniqid(),
            category: 'Fiction',
          });
        }
      });
    }
  };

  return (
    <form
      onSubmit={addBookSubmit}
      className="add-book-form"
    >
      <h3>ADD NEW BOOK</h3>
      <input
        id="title"
        type="text"
        placeholder="Book Title"
        value={title}
        name="title"
        onChange={handleChange}
      />
      <input
        id="author"
        type="text"
        placeholder="Author"
        value={author}
        name="author"
        onChange={handleChange}
      />
      <input
        type="submit"
        value="ADD BOOK"
        className="btn"
      />
    </form>
  );
};

export default AddBookForm;
