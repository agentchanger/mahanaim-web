import React from 'react'
import './DivisiLawatan.css'
import assets from '../../../assets'
import { Link } from 'react-router-dom'

const DivisiLawatan = () => {
  return (
    <div className='divisi-lawatan-wrapper'>
      <div className='divisi-lawatan-header'>
        <div className='divisi-lawatan-content'>
            <a href='/' className='divisi-lawatan-back-btn'><img src={assets.LeftArrow}/><span>Ministries</span></a>
            <h1 className='title-black'>Divisi Lawatan</h1>
            <p className='header-black'>Ujung tombak dari pelayanan Mahanaim, menjadi visi dan mimpi utama yang Tuhan berikan bagi Mahanaim.</p>
            <p className='text-body-black'>Dimulai dari sebuah kerinduan hati Tuhan untuk bangsa Indonesia diselamatkan, hingga semua penduduknya orang benar. Kerinduan yang ditangkap dan disambar oleh Mahanaim, dan kerinduan tersebut menjadi sebuah tujuan utama hidup kami. Dimulai dengan begitu sederhana, Tuhan perlengkapi dan bawa menjadi luar biasa.</p>
        </div>
        <div className='divisi-lawatan-img'><img src={assets.DivisiLawatanProfile}/></div>  
      </div>

      <div className='divisi-lawatan-list-wrapper'>
        <div className='divisi-lawatan-list'>
          <img src={assets.DivisiYouthProfile}/>
          <p>Youth</p>
          <Link to='youth'>View more</Link>
        </div>
        <div className='divisi-lawatan-list'>
          <img src={assets.DivisiGenerasiYoelProfile}/>
          <p>Generasi Yoel</p>
          <a href='#'>View more</a>
        </div>
        <div className='divisi-lawatan-list'>
          <img src={assets.DivisiPenjaraProfile}/>
          <p>Penjara</p>
          <a href='#'>View more</a>
        </div>
        <div className='divisi-lawatan-list'>
          <img src={assets.DivisiSukuPedalamanProfile}/>
          <p>Suku Pedalaman</p>
          <a href='#'>View more</a>
        </div>
        <div className='divisi-lawatan-list'>
          <img src={assets.DivisiPremanProfile}/>
          <p>Preman & Transpuan</p>
          <a href='#'>View more</a>
        </div>
      </div>
    </div>
  )
}

export default DivisiLawatan