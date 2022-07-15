export const SET_PROGRESS = 'SET_PROGRESS';

export const setLoadingBarProgress = (value) => ({
  type: SET_PROGRESS,
  payload: value,
});

const initialState = {
  progress: 0,
};

export default function loadingBar(state = initialState, action) {
  switch (action.type) {
    case SET_PROGRESS:
      // state.progress = action.payload;
      return { ...state, progress: action.payload };

    default:
      return state;
  }
}
