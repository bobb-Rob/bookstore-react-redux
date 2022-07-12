import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { doAddBook } from '../redux/books/books';

const AddBookForm = () => {
  const [book, setBook] = useState({ title: '', author: '', id: uniqid() });
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
    if (book.title !== '' && book.author !== '') {
      dispatch(doAddBook(book));
    }
  };

  console.log(book);
  return (
    <form
      onSubmit={addBookSubmit}
    >
      <h3>ADD NEW BOOK</h3>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        name="author"
        onChange={handleChange}
      />
      <input
        type="submit"
        value="ADD BOOK"
      />
    </form>
  );
};

export default AddBookForm;
