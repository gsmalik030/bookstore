import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';
const Form = () => {
  const dispatch= useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const bookTitle = (e) => setTitle(e.target.value);
  const bookAuthor = (e) => setAuthor(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title === '' || author === '') return;
    dispatch(addBook({ title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
  <form onSubmit={handleSubmit}>
    <input onChange={bookTitle} value={title} type="text" placeholder="Book Title" />
    <input onChange={bookAuthor} value={author} type="text" placeholder="Author Name" />
    <button type="submit">Add Book</button>
  </form>
)}

export default Form;
