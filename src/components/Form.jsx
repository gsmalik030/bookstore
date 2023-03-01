import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const bookTitle = (e) => setTitle(e.target.value);
  const bookAuthor = (e) => setAuthor(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: Math.floor(Math.random() * 100000),
      title: title,
      author: author,
      category: 'comedy',
    };
    if (title === '' || author === '') return;
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={bookTitle}
        value={title}
        type='text'
        placeholder='Title'
        name='title'
      />
      <input
        onChange={bookAuthor}
        value={author}
        type='text'
        placeholder='Author'
        name='author'
      />
      <button type='submit'>Add Book</button>
    </form>
  );
};

export default Form;
