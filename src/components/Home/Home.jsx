import React from 'react'
import ButtonContact from '../ButtonContact/ButtonContanct'
import './stylesHome.css'

export const Home = () => {
  return (
    <section className='home' id="home">
      <div className='cont-home'>
      <div className='cont2'>
      <h1 className='title'>Building Digital Products, Brands & Experience</h1>
      <p className='text'>Digital Agency Is your Online Team Mangement Tool that easy And Promopt</p>
      <ButtonContact/> 
      </div>     
      <div className='cont-img'>
      <img className='img-home' src='https://res.cloudinary.com/dmaviub4l/image/upload/v1655839779/kldhs43btrzqhfzfmc9y.png' alt='business'/>
      </div>
      </div>
      <p className='phrase'>Trusted by 4,000+ Companies</p>
      <div className='social-media'>
        <i class="fab fa-spotify">Spotify</i>
        <i class="fab fa-slack">slack</i>
        <i class="fab fa-dropbox">Dropbox</i>
        <i class="fab">zoom</i>
      </div>
    </section>
  )
}


