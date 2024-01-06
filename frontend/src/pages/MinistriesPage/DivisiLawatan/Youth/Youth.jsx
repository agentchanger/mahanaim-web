import React from 'react'
import YouthHero from './YouthHero/YouthHero'
import YouthStory from './YouthStory/YouthStory'
import YouthGallery from './YouthGallery/YouthGallery'

const Youth = () => {
  return (
    <div className='divisi-youth-wrapper'>
      <YouthHero/>
      <YouthStory/>
      <YouthGallery/>
    </div>
  )
}

export default Youth