import React from 'react'
import './Ministries.css'

const Ministries = () => {
  return (
    <div className='ministries-wrapper'>
      <div className='ministries-content'>
        <p className='ministries-header'>MINISTRIES</p>
        <div className='cards'>
          <div className='ministry-card'>
            <div className='card'>
              <div className='front' id='one'>
                <h1>Media</h1>
              </div>
              <div className='back'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
            </div>
          </div>
          <div className='ministry-card'>
            <div className='card'>
              <div className='front' id='two'>
                <h1>Akademik</h1>
              </div>
              <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
          </div>
          <div className='ministry-card'>
            <div className='card'>
              <div className='front' id='three'>
                <h1>Sosial</h1>
              </div>
              <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
          </div>
          <div className='ministry-card'>
            <div className='card'>
              <div className='front' id='four'>
                <h1>Lawatan</h1>
              </div>
              <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
          </div>
          <div className='ministry-card'>
            <div className='card'>
              <div className='front' id='five'>
                <h1>Bisnis</h1>
              </div>
              <div className='back'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            </div>
          </div>
          <div className='more-btn-wrapper'>
            <a href='#' className='more-btn'>
              More coming
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ministries