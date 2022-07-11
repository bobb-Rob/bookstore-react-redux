// Actions
const CHECK_STATUS = 'CHECK_STATUS';

// Action Creators
export const doCheckStatus = () => ({ type: CHECK_STATUS });

// Reducer
const initialState = [];
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
