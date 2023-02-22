import React from 'react';

const Form = () => {
  return (
    <form>
      <input type='text' placeholder='Book Title' />
      <select id='author' name='author'>
        <option value='Auther 1'>Auther 1</option>
        <option value='Auther 2'>Auther 2</option>
        <option value='Auther 2'>Auther 3</option>
      </select>
      <button type='submit'>Add Book</button>
    </form>
  );
};

export default Form;
