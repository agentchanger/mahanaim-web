import React, { useRef } from 'react'
import About from './About/About';
import Events from './Events/Events';
import Hero from './Hero/Hero';
import Location from './Location/Location';
import Ministries from './Ministries/Ministries';
import Testimonies from './Testimonies/Testimonies';

const MainPage = () => {
  return (
    <>
        <Hero/>
        <About/>
        <Ministries/>
        <Events/>
        <Testimonies/>
        <Location/>
    </>
  )
}

export default MainPage