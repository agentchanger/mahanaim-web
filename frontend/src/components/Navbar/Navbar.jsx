import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <a href='#' className='logo'>Mahanaim</a>
      <ul>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Ministries</a>
        </li>
        <li>
          <a href='#'>Events</a>
        </li>
        <li>
          <a href='#'>Stories</a>
        </li>
      </ul>
      
    </nav>
  );
}

export default Navbar