import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <p>Book Store</p>
    <ul>
      <li><Link to="/">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </nav>
);

export default Navbar;
