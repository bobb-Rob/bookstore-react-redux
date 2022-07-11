/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { doRemoveBook } from '../redux/books/books';

const Book = ({ title, author,  id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <h3>{title}</h3>
      <p>{author}</p>      
      <div>
        <button
          type="button"
          onClick={ () => dispatch(doRemoveBook(id)) }
        >
          Remove
        </button>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
