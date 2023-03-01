const CHECK = 'CHECK';

export default (state = [], action) => {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: CHECK });
