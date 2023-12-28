import React from 'react'
import './Location.css'

const Location = () => {
  return (
    <div className='location-wrapper'>
      <div className='location-content'>
        <p className='location-header'>LOCATION</p>
        <p className='location-address'>Rawalambu, Bekasi, West Java, Indonesia</p>
        <p className='location-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href='#'className='findus-btn'>Find us here</a>
      </div>
      <div className='map'>
      <iframe src="https://www.google.com/maps/d/embed?mid=1_4GoqcdUTpXt3OKniq1EdPVIxKg&hl=en_US&ehbc=2E312F" width="640" height="480"></iframe>
      </div>
    </div>
  )
}

export default Location