import React from 'react'
import './Events.css'
import assets from '../../../assets'

const Events = () => {
  const eventWebsite = "https://youtube.com/live/EZsYM4J3ifo?feature=share"
  const eventForms = "https://docs.google.com/forms/d/e/1FAIpQLSd8jiuNyF6Am2PpRIamXb3r_jSOYfgJ83dlYFay3MGRIgsCVw/viewform?fbclid=PAAab_5ED6Ms7bsexg9AUD9wtNbGkSeQtNBXUA9VYYLQBG27yUCRh1t08T5aU"
  
  return (
    <div className='events-wrapper' id='events-anchor-tag'>
      <div className='event-img-wrapper'><img src={assets.EventImage} alt='eventImage'/>
        <img src=''/>
      </div>
      <div className='event-content-wrapper'>
        <p className='header-black'>UPCOMING EVENTS</p>
        <h1 className='title-black'>TACTIC 2024</h1>
        <p className='header-black'>Jan 4, 2024 - Jan 6, 2024</p>
        <p className='text-body-black'>Shalom pasukan Tuhan! Tahun 2024 adalah tahun di mana anak-anak Tuhan akan di bawa Tuhan semakin tinggi, masuk ke dalam kapal perang Tuhan. Hadirilah Retreat Mahanaim pada tanggal dan tempat yang tertera di brosur. See you there, soldiers! </p>
        <a href={eventWebsite} className='btn-black'>View Event</a>
        <a href={eventForms} className='btn-black' id='second'>Register Now</a>
      </div>
    </div>
  )
}

export default Events