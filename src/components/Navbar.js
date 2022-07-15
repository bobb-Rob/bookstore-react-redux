import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './styles/navbar.css';

function Navbar({ name }) {
  return (
    <nav>
      <div
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Link className="logo" to="/">{name}</Link>
        <div>
          <Link className="nav-links" to="/">BOOKS</Link>
          <Link className="nav-links" to="category">CATEGORY</Link>
        </div>
      </div>
      <div className="user-icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navbar;
