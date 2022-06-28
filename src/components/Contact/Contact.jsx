import React from 'react'
import ButtonContact from '../ButtonContact/ButtonContanct'
import './stylesContact.css'

const Contact = () => {
  return (
    <section className='contact' id="contact">
      <div className='img-contact'>
      <img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1656371799/zcokgggg644ilhxmos4e.png' alt='img-contact' />
      </div>
      <div>
      <h2>Be a part of the next big thing</h2>
      <p className='text'>we work with brans, Startups, to SMEs. Colaborate for more impact and growt</p>
      <ButtonContact />
      </div>
    </section>
  )
}

export default Contact