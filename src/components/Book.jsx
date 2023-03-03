import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../src/redux/books/booksSlice';
import './styles/book.css';
const Book = (props) => {
  const dispatch = useDispatch();

  return (
    <section className='bookSection'>
      <div className='bookInfoBox'>
        <p className='category'>{props.category}</p>
        <h3 className='title'>{props.title}</h3>
        <p className='author'>{props.author}</p>
        <div className='btnBox'>
          <span className='btn'>Comments</span>
          <div className='line' />
          <span
            className='btn'
            type='button'
            onClick={() => dispatch(removeBook(props.id))}
          >
            Remove
          </span>
          <div className='line' />
          <span className='btn'>Edit</span>
        </div>
      </div>
      <div className="statContainer">
        <div className='statBox'>
          <div className="container">
            <div className="ui-widget" />
          </div>
          <div className="progressBox">
            <p className='progress'>64%</p>
            <p className='completed'>Completed</p>
          </div>
        </div>
        <div class="line-2" />
        <div className="chapterBox">
          <p className='currentChapter'>CHAPTER</p>
          <p className='lesson'>Chapter 17</p>
          <button className='updateProgressBtn' type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </section>
  );
};

Book.propTypes = {
  id: PropTypes.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
