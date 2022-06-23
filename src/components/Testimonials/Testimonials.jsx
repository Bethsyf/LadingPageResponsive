import React from 'react'
import './stylesTestimonials.css'

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <span className='texts' >Testimonials</span>
      <h1>Read What Other have To Say</h1>
      <div className='contai-testi'>  
        <img className='img-testimonial' src='https://res.cloudinary.com/dmaviub4l/image/upload/v1655841040/rn3xu6bfjfwz425kxmtb.png' alt='testimonial1'/>
        <br/>
        <span className='name'>Andrew Rathore</span>
        <p className='text'>Lorem Ipsum Dolor Sit Amet Consectetur adipisicing elit. Nunc Uilamcorper Scelerisque Mi, In Malesuada Felis Malescuada Vel</p>
      </div>
      <div> 
        <img className='img-testimonial' src='https://res.cloudinary.com/dmaviub4l/image/upload/v1655844806/cr6kd6zfkkalrsu4lcde.png' alt='testimonial2'/>
        <br/>
        <span className='name'>Vera Duncan</span>
        <p className='text'>Lorem Ipsum Dolor Sit Amet Consectetur adipisicing elit. Nunc Uilamcorper Scelerisque Mi, In Malesuada Felis Malescuada Vel</p>
      </div>
      <div> 
        <img className='img-testimonial' src='https://res.cloudinary.com/dmaviub4l/image/upload/v1655844968/powrop000l5nqhv084eu.png' alt='testimonial3'/>
        <br/>
        <span className='name'>Mark Smith</span>
        <p className='text'>Lorem Ipsum Dolor Sit Amet Consectetur adipisicing elit. Nunc Uilamcorper Scelerisque Mi, In Malesuada Felis Malescuada Vel</p>
      </div>
    </section>
  )
}

export default Testimonials