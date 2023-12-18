import React from 'react'
import {About, Events, Footer, Hero, Location, Ministries, Navbar, Testimonies} from "./components"

const App = () => {
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

export default App