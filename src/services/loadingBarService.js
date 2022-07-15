import store from '../redux/configureStore';
import { setLoadingBarProgress } from '../redux/barLoading.js/loading';

export const beginTheBar = () => {
  const i = Math.floor(Math.random() * 40) + 10;
  store.dispatch(setLoadingBarProgress(i));
};

export const endTheBar = () => {
  store.dispatch(setLoadingBarProgress(100));
};
