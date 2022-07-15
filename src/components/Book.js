import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { doRemoveBook } from '../redux/books/books';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <li className="book-card">
      <div>
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{author}</p>
        <div className="book-buttons-wrap">
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={() => {
              dispatch(doRemoveBook(id));
            }}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        recod
      </div>
      <div>
        <span>Current Chapter</span>
        <span>Chapter 17</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
