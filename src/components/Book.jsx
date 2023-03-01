import React from 'react';
import { useDispatch } from 'react-redux';
import {removeBook} from "../redux/books/booksSlice"

const Book = (props) => {
  const dispatch = useDispatch();
  return (
  <div>
    <h4>{props.title}</h4>
    <p>{props.author}</p>
    <button onClick={()=>dispatch(removeBook(props.id))}>Remove Book</button>
  </div>
)}

export default Book;
