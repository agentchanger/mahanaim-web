import React from 'react'
import '../Footer/Footer.css'
import assets from '../../assets'

const FooterAlt = () => {
  const instagramLink = "https://www.instagram.com/bmnnations/"
  const youtubeLink = "https://www.youtube.com/@bahteramedianetwork"

  return (
    <div className='footer-wrapper' id='footer-anchor-tag'>
      <div className='join-us-btns-container'>
        <h1 className='title-white'>Join us now!</h1>
        <div className='join-buttons'>
          <a className='btn-orange'>
            <p>Email</p>
            <img src={assets.MailButton}/>
          </a>
          <a className='btn-orange'>
            <p>Whatsapp</p>
            <img src={assets.WhatsappButton}/>
          </a>
        </div>
      </div>
      <div className='icons-wrapper'>
        <div className='social-icons'>
          <h3>Find us on social media:</h3>
          <div className='icons'>
            <a href={instagramLink} className='instagram'><img src={assets.Instagram} alt='instagram'/></a>
            <a href={youtubeLink} className='youtube'><img src={assets.YouTube} alt='youtube'/></a>
            <a className='facebook'><img src={assets.Facebook} alt='facebook'/></a>
            <a className='tiktok'><img src={assets.TikTok} alt='tiktok'/></a>
          </div>
        </div>
        <div className='contact-us'>
          <h3>Contact us via:</h3>
          <div className='icons'>
            <a className='line'><img src={assets.Line} alt='line'/></a>
            <a className='whatsapp'><img src={assets.Whatsapp} alt='whatsapp'/></a>
            <a className='telegram'><img src={assets.Telegram} alt='telegram'/></a>
          </div>
        </div>
      </div>
      <div className='copyright-footer'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  )
}

export default FooterAlt