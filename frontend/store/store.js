import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import RootMiddlware from '../middleware/root_middleware';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    RootMiddlware
  )
);

export default configureStore;
