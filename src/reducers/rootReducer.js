// third-party libraries
import { combineReducers } from 'redux';

// reducers
import { products } from './productsReducer';
import { stats } from './statsReducer';

const combinedReducers = combineReducers({
  products,
  stats,
});

export default combinedReducers;
