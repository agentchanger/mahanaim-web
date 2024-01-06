import React from 'react'
import './Location.css'

const Location = () => {
  return (
    <div className='location-wrapper'>
      <div className='location-content'>
        <h1 className='title-black'>Find us here:</h1>
        {/* <div className='location-address'>
          <p className='location-address-header'>ADDRESS</p>
          <p className='text-body-black'>Jl. Bambu Kuning Selatan, RT.003/RW.004, Sepanjang Jaya, Kec. Rawalambu, Kota Bekasi, Jawa Barat 17114, Indonesia</p>
        </div> */}
      </div>
      <div className='map-wrapper'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9379013266052!2d106.99411447472424!3d-6.271896693716846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698ddc5d12d635%3A0xfababe4150314d52!2sSEKOLAH%20MAHANAIM!5e0!3m2!1sen!2ssg!4v1703944164754!5m2!1sen!2ssg"></iframe>
      </div>
    </div>
  )
}

export default Location