import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <header>
      <div className='wrapper' id='hero-anchor-tag'>
        <div className='call-to-action'>
          <h1 className='hero-header'>Kemah Para Pahlawan</h1>
          <h3 className='hero-subheader'>Jalan pulang bagi mereka yang terhilang</h3>
          <div className='btn-wrapper-hero'>
            <a href='#about-anchor-tag' className='btn-black'>Find out more</a>
            <a href='#footer-anchor-tag' className='btn-black' id='second'>Join us</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero