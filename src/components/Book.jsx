import React from 'react'

const Book = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
        <p>{props.author}</p>
        <button>Remove Book</button>
    </div>
  )
}

export default Book
