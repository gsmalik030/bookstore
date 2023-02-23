import React from 'react';
import Form from './Form';
import Book from './Book';

const Books = () => (
  <div>
    <ul>
      <Book title="book 1" author="author 1" />
    </ul>
    <Form />
  </div>
);

export default Books;
