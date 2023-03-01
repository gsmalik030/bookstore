import { useSelector } from 'react-redux';

import Book from './Book';
import Form from './Form';
const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </>
  );
};
export default Books;
