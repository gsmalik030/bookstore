import React from 'react';
import { Link } from 'react-router-dom';
import {MdAccountCircle} from 'react-icons/md';
import "./styles/navBar.css"
const Navbar = () => (
  <nav className='navBar'>
    <div className="navContainer">
      <p className='logo'>Bookstore CMS</p>
      <ul className='navLinks'>
        <li className='navlink'><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </div>
    <div className="ovel">
    <MdAccountCircle className='accIcon' />
    </div>
  </nav>
);

export default Navbar;
