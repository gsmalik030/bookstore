const ADD = 'books/add';
const REMOVE = 'books/remove';
const intialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];
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
      return [...state, action.payload];
    case REMOVE:
      return [...state.filter((book) => book.item_id !== action.payload)];
    default:
      return state;
  }
};

export { addBook, removeBook, bookReducer };
