import React from 'react'
import './stylesAbout.css'

const About = () => {
  return (
    <section className='about'>
    <div className='section1'>
      <h2 >Branding & Design System</h2>
      <p className='text'>Commonly Used in the Graphic, print & Publishing Industris for Previewing Visual Layout And Mockups</p>
      <i className="fas fa-arrow-down"></i>
      <img className='img-about' src='https://res.cloudinary.com/dmaviub4l/image/upload/v1655840562/gi9ivwphvs5ujw3so0le.png' alt='team'/>
    </div>
    <div className='section1'>
      <h2>Custome & Plugin Development</h2>
      <p className='text'>Commonly Used In The Graphic, Print & Publishing Industris for Previewing Visual Layout And Mockups</p>
      <i className="fas fa-arrow-down"></i>
      <img className='img-about' src='https://res.cloudinary.com/dmaviub4l/image/upload/v1655840808/lz5ovoi487xqwsgekaqx.png' alt='team'/>
    </div>
    </section>
  )
}

export default About