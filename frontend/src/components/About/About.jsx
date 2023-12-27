import React from 'react'
import './About.css'
import Profile from '../../assets/about-profile.svg'

const About = () => {
  return (
    <div className='about-wrapper'>
      <h1>Mahanaim adalah rumah bagi mereka yang dipilihNya.</h1>
      <div className='about-content'>
        <div className='about-text-wrapper'>
          <h2>Kami menjadi wadah bagi setiap umat Tuhan untuk menyatukan hati, iman dan kasih</h2>
          <p>Kami menjangkau setiap orang dari segala golongan, demi mewujudkan sebuah mimpi dan visi yang diberikan Tuhan bagi kami, yaitu menyelamatkan yang terhilang, membawa setiap orang untuk kembali kepada Tuhan, sebab rumah-Nya harus penuh.</p>
          <div className='btn-wrapper-about'>
            <a href='#' className='findout-btn'>Find out more</a>
          </div>
        </div>
        <div className='about-image-wrapper'><img src={Profile}></img></div>
      </div>
    </div>
  )
}

export default About