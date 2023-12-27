import React from 'react'
import './Testimonies.css'
import {Testi1, Testi2} from '../../assets/index'

const Testimonies = () => {
  return (
    <div className='testimonies-wrapper'>
      <div className='testimonies-img-wrapper'>
        <div className='testimonies-img1-wrapper'><img src={Testi1}/></div>
        <div className='testimonies-img2-wrapper'><img src={Testi2}/></div>
      </div>
      <div className='testimonies-content'>
        <p className='testimonies-header'>STORIES</p>
        <h1 className='testimonies-title'>Our testimony</h1>
        <p className='testimonies-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href='#' className='findout-btn-white'>Find out more</a>
      </div>
    </div>
  )
}

export default Testimonies