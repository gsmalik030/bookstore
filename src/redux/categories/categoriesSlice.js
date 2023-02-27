const BOOKS = 'BOOKS';

const initialState = [];

export const bookCheck = () => ({
  type: BOOKS,
});

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS:
      return 'UNDER CONSTRUCTION';
    default:
      return state;
  }
};

export default categoryReducer;
