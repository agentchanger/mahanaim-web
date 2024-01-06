import React, { useEffect } from 'react'
import YouthHero from './YouthHero/YouthHero'
import YouthStory from './YouthStory/YouthStory'
import YouthGallery from './YouthGallery/YouthGallery'

const Youth = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className='divisi-youth-wrapper'>
      <YouthHero/>
      <YouthStory/>
      <YouthGallery/>
    </div>
  )
}

export default Youth