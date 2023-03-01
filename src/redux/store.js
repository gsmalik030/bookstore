import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducer from '../../src/redux/books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
