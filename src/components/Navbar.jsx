import React from 'react';
import { Link } from 'react-router-dom';
import accIcon from '../assets/images/profile.png';
import "./styles/navBar.css"
const Navbar = () => (
  <nav className='navBar'>
    <div className="navContainer">
      <p className='logo'>Bookstore CMS</p>
      <ul className='navLinks'>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </div>
    <img src={accIcon} alt="profile" />
  </nav>
);

export default Navbar;
