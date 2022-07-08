import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ name }) {
  return (
    <nav>
      <span>{name}</span>
      <div>
        <Link to="/">BOOKS</Link>
        {' '}
        |
        {' '}
        <Link to="category">CATEGORY</Link>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navbar;
