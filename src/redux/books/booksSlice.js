const ADD = 'books/add';
const REMOVE = 'books/remove';
const intialState = [];
const addBook = (book) => ({
  type: ADD,
  payload: book,
});

const removeBook = (index) => ({
  type: REMOVE,
  payload: index,
});

const bookReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state.books, action.payload];
    case REMOVE:
      return [...state.books.filter((book) => book.id !== action.payload)];
    default:
      return state;
  }
};

export { addBook, removeBook, bookReducer };
