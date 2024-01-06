import React from 'react'
import './YouthHero.css'
import assets from '../../../../../assets'
import { Link } from 'react-router-dom'

const YouthHero = () => {
  return (
    <div className='youth-hero-wrapper'>
        <div className='divisi-youth-header'>
            <div className='divisi-youth-content'>
                <Link to='/divisi-lawatan' className='divisi-youth-back-btn'><img src={assets.LeftArrow}/><span>Divisi Lawatan</span></Link>
                <h1 className='title-black'>Youth</h1>
                <p className='header-black'>Generasi Muda</p>
                <p className='text-body-black'>Kami adalah bagian dari Mahanaim yang menjangkau anak-anak muda untuk menjadi revivalist bagi kota-kota, provinsi-provinsi, hingga bangsa-bangsa. Kami akan terus melaju dalam iman, bergerak dalam lawatan, dan tidak akan terhentikan sampai melihat generasi kami diselamatkan. GASPOL!</p>
                <a href='#' className='btn-black'>Contact us</a>
            </div>
            <div className='divisi-youth-img'><img src={assets.YouthHeroProfile}/></div> 
        </div>
    </div>
  )
}

export default YouthHero