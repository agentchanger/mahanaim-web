import React from 'react'
import About from './About/About';
import Events from './Events/Events';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Location from './Location/Location';
import Ministries from './Ministries/Ministries';
import Navbar from '../Navbar/Navbar';
import Testimonies from './Testimonies/Testimonies';

const MainPage = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Ministries/>
        <Events/>
        <Testimonies/>
        <Location/>
        <Footer/>
    </>
  )
}

export default MainPage