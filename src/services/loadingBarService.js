import { setLoadingBarProgress } from '../redux/barLoading.js/loading';

export const beginTheBar = (dispatch) => {
  const i = Math.floor(Math.random() * 40) + 10;
  dispatch(setLoadingBarProgress(i));
};

export const endTheBar = (dispatch) => {
  dispatch(setLoadingBarProgress(100));
};
