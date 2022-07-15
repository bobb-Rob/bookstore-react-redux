import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doCheckStatus } from '../redux/categories/categories';

const Category = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        {typeof categories === 'string' ? categories : ''}
      </h2>
      <button
        type="button"
        onClick={() => dispatch(doCheckStatus())}
        className="btn"
      >
        Check Status
      </button>
    </div>
  );
};

export default Category;
