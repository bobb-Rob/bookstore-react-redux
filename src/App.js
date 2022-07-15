import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Category from './components/Category';
import { setLoadingBarProgress } from './redux/barLoading.js/loading';
import './App.css';

const App = () => {
  const { loadingBar } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <LoadingBar
        color="var(--blue)"
        progress={loadingBar.progress}
        onLoaderFinished={() => dispatch(setLoadingBarProgress(0))}
      />
      <Router>
        <Navbar name="Bookstore CMS" />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="category" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
