import React from 'react'
import './Events.css'
import assets from '../../../assets'

const Events = () => {
  return (
    <div className='events-wrapper'>
      <div className='event-img-wrapper'><img src={assets.EventImage} alt='eventImage'/>
        <img src=''/>
      </div>
      <div className='event-content-wrapper'>
        <p className='event-header'>UPCOMING EVENTS</p>
        <h1>Event Name</h1>
        <p className='event-date'>Oct 20, 2023 - Oct 21, 2023</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href='#' className='view-event-btn'>View Event</a>
        <a href='#' className='register-now-btn'>Register Now</a>
      </div>
    </div>
  )
}

export default Events