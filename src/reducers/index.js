import BookReducer from './reducer_books';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ // When we have multiple reducers, this will combine them
  books: BookReducer
});

export default rootReducer;
