import React, { useRef } from 'react';
import './Navbar.css';
import NavBarsIcon from '../../assets/nav_bars.svg'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef(null)

  const showOrHideNavBar = () => {
    // console.log("showNavBar button is clicked!")
    const classList = navRef.current.classList
    if (classList.contains("responsive-nav")) {
      classList.remove("responsive-nav")
    } else {
      classList.add("responsive-nav")
    }
  }

  const location = useLocation()

  return (
    <>
      <div className='base-navbar'>
        <nav>
          <Link to='/' className='logo'>Mahanaim</Link>
          <ul>
            <li>
              <a href={location.pathname === '/' ? '#about-anchor-tag' : 'about'}>About</a>
            </li>
            <li>
              <a href={location.pathname === '/' ? '#ministries-anchor-tag' : 'ministries'}>Ministries</a>
            </li>
            <li>
              <a href={location.pathname === '/' ? '#events-anchor-tag' : 'events'}>Events</a>
            </li>
            <li>
              <a href={location.pathname === '/' ? '#testimonies-anchor-tag' : 'testimonies'}>Stories</a>
            </li>
            <li>
              <button className='nav-bars-btn' onClick={showOrHideNavBar}>
                <img src={NavBarsIcon}/>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className='dropdown-navbar'>
        <nav ref={navRef}>
          <Link to='/about' onClick={showOrHideNavBar}>About</Link>
          <a href='#ministries-anchor-tag' onClick={showOrHideNavBar}>Ministries</a>
          <a href='#events-anchor-tag' onClick={showOrHideNavBar}>Events</a>
          <a href='#testimonies-anchor-tag' onClick={showOrHideNavBar}>Stories</a>
        </nav>
      </div>
    </>
  );
}

export default Navbar