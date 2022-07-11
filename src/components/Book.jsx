/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => {

  return (
    <li>
      <h3>{title}</h3>
      <p>{author}</p>      
      <div>
        <button type="button">Remove</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
