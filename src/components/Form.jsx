import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import './styles/form.css';

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
    <>
    <h2 className='form-title'>Add New Book</h2>
    <form className='form' onSubmit={handleSubmit}>
      <input
      className='form-input'
        onChange={bookTitle}
        value={title}
        type='text'
        placeholder='Title'
        name='title'
      />
      <input
      className='form-input'
        onChange={bookAuthor}
        value={author}
        type='text'
        placeholder='Author'
        name='author'
      />
      <button className='add-book' type='submit'>Add Book</button>
    </form>
    </>
  );
};

export default Form;
