import React, { useEffect } from 'react'
import './NoLink.css'
import { Link, useNavigate } from 'react-router-dom';
import assets from '../../assets';

const NoLink = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className='nolink-wrapper'>
        <h1 className='title-black'>Please be patient. Page under construction...</h1>
        <a className='nolink-back-btn' onClick={goBack}><img src={assets.LeftArrow}/><span>Back</span></a>
    </div>
  )
}

export default NoLink