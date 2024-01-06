import React from 'react'
import './Testimonies.css'
import assets from '../../../assets/index'
import { Link } from 'react-router-dom'

const Testimonies = () => {
  return (
    <div className='testimonies-wrapper' id='testimonies-anchor-tag'>
      <div className='mobile-testimonies-header'>
        <p className='header-white'>STORIES</p>
        <h1 className='title-white'>Our testimony</h1>
      </div>
      <div className='testimonies-img-wrapper'>
        <div className='testimonies-img1-wrapper'><img src={assets.Testi1}/></div>
        <div className='testimonies-img2-wrapper'><img src={assets.Testi2}/></div>
      </div>
      <div className='testimonies-content'>
        <div className='testimonies-header'>
          <p className='header-white'>STORIES</p>
          <h1 className='title-white'>Our testimony</h1>
        </div>
        <p className='text-body-white'>Setiap kegerakan dan pelayanan yang kami lakukan membawa banyak cerita dan kesaksian, baik dari mereka yang melayani maupun mereka yang dilayani. Pergumulan dan proses kehidupan yang mereka lewati, pada akhirnya tidak sebanding dengan perjumpaan dengan Tuhan dan rencanaNya atas setiap hidup mereka.</p>
        <Link to='/testimonies' className='btn-white'>Find out more</Link>
      </div>
    </div>
  )
}

export default Testimonies