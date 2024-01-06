import React from 'react'
import './About.css'
import assets from '../../../assets'

const About = () => {
  return (
    <>
      <a id='about-anchor-tag'></a>
      <div className='about-wrapper'>
        <h1 className='title-black'>Mahanaim adalah rumah bagi mereka yang dipilihNya.</h1>
        <div className='about-content'>
          <div className='about-text-wrapper'>
            <h2 className='header-black'>Kami menjadi wadah bagi setiap umat Tuhan untuk menyatukan hati, iman dan kasih</h2>
            <p className='text-body-black'>Kami menjangkau setiap orang dari segala golongan, demi mewujudkan sebuah mimpi dan visi yang diberikan Tuhan bagi kami, yaitu menyelamatkan yang terhilang, membawa setiap orang untuk kembali kepada Tuhan, sebab rumah-Nya harus penuh.</p>
            <a href='#' className='btn-black'>Find out more</a>
          </div>
          <div className='about-image-wrapper'><img src={assets.Profile}></img></div>
        </div>
      </div>
    </>
  )
}

export default About