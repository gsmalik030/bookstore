import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {removeBook} from '../../src/redux/books/booksSlice'

const Book = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>{props.title}</p>
      <p>{props.author}</p>
      <button type="button" onClick={()=>dispatch(removeBook(props.id))}>
        Delete
      </button>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;