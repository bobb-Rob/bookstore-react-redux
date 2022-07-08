import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Category from './components/Category';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Navbar name="Bookstore CMS" />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="category" element={<Category />} />
      </Routes>
    </Router>
  </div>
);

export default App;
