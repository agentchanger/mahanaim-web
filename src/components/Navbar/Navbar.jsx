import React, { useRef } from 'react';
import './Navbar.css';
import NavBarsIcon from '../../assets/nav_bars.svg'

const Navbar = () => {
  const navRef = useRef(null)

  const showNavBar = () => {
    console.log("showNavBar button is clicked!")
    navRef.current.classList.toggle("responsive-nav")
  }

  return (
    <>
      <div className='base-navbar'>
        <nav>
          <a href='/' className='logo'>Mahanaim</a>
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
            <li>
              <button className='nav-bars-btn' onClick={showNavBar}>
                <img src={NavBarsIcon}/>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className='dropdown-navbar'>
        <nav ref={navRef}>
          <a href='#'>About</a>
          <a href='#'>Ministries</a>
          <a href='#'>Event</a>
          <a href='#'>Stories</a>
        </nav>
      </div>
    </>
  );
}

export default Navbar