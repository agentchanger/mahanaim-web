import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <header>
      <div className='wrapper'>
        <div className='call-to-action'>
          <h1 className='hero-header'>Kemah Para Pahlawan</h1>
          <p className='hero-subheader'>Jalan pulang bagi mereka yang terhilang</p>
          <div className='btn-wrapper-hero'>
            <a href='/about' className='findout-btn'>
              Find out more
            </a>
            <a href='/join' className='join-btn'>
            Join us
          </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero