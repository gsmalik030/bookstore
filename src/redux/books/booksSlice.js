import { createAsyncThunk } from '@reduxjs/toolkit';

import API_URL from '../../api/apiKey';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH = 'bookstore/books/FETCH';

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH}/fulfilled`:
      return { ...state, books: [...action.payload] };
    case `${ADD}/fulfilled`:
      return { ...state, books: [...state.books, action.payload] };
    case `${REMOVE}/fulfilled`:
      return { ...state, books: state.books.filter((book) => book.item_id !== action.payload) };
    default:
      return state;
  }
};

const objToBook = (inputObj) => {
  const objBook = Object.keys(inputObj).map((obj) => ({
    item_id: obj,
    title: inputObj[obj][0].title,
    author: inputObj[obj][0].author,
    category: inputObj[obj][0].category,
  }));

  return objBook;
};

export const fetchBook = createAsyncThunk(FETCH, async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  const objBook = objToBook(data);

  return objBook;
});

export const addBook = createAsyncThunk(ADD, async (book) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  return book;
});

export const removeBook = createAsyncThunk(REMOVE, async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE', body: { item_id: id } });

  return id;
});