import React from 'react'
import './Footer.css'
import assets from '../../../assets'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='form-container'>
        <div className='form-title'><h1>Stay connected</h1></div>
        <div className='input-container'>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='Last Name'/>
          <input type='text' placeholder='Email Address'/>
          <input type='text' placeholder='Phone Number'/>
        </div>
        <div className='join-btn-wrapper'>
          <a href='#' className='join-btn'>Join</a>
        </div>
      </div>
      <div className='icons-wrapper'>
        <div className='social-icons'>
          <h3>Find us on social media:</h3>
          <div className='icons'>
            <a href='#' className='instagram'><img src={assets.Instagram} alt='instagram'/></a>
            <a href='#' className='youtube'><img src={assets.YouTube} alt='youtube'/></a>
            <a href='#' className='facebook'><img src={assets.Facebook} alt='facebook'/></a>
            <a href='#' className='tiktok'><img src={assets.TikTok} alt='tiktok'/></a>
          </div>
        </div>
        <div className='contact-us'>
          <h3>Contact us via:</h3>
          <div className='icons'>
            <a href='#' className='line'><img src={assets.Line} alt='line'/></a>
            <a href='#' className='whatsapp'><img src={assets.Whatsapp} alt='whatsapp'/></a>
            <a href='#' className='telegram'><img src={assets.Telegram} alt='telegram'/></a>
          </div>
        </div>
      </div>
      <div className='copyright-footer'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  )
}

export default Footer