import React from 'react';

const AddBookForm = () => (
  <form>
    <h3>ADD NEW BOOK</h3>
    <input type="text" placeholder="Book Title" />
    <input type="text" placeholder="Author" />
    <input type="submit" value="ADD BOOK" />
  </form>
);

export default AddBookForm;
