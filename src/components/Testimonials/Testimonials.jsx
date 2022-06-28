import React from 'react'
import './stylesTestimonials.css'

const Testimonials = () => {
  return (
    <section className='testimonials' id="testimonials">
      <p className='texts' >Testimonials</p>
      <h1 className='titleT'>Read What Other Have To Say</h1>
      <div className='cont-tot'>
      <div className='contai-testi'>  
        <img className='img-testimonial' src='https://res.cloudinary.com/dmaviub4l/image/upload/v1655841040/rn3xu6bfjfwz425kxmtb.png' alt='testimonial1'/>
        <br/>
        <p className='name'>Andrew Rathore</p>
        <p className='text'>Lorem Ipsum Dolor Sit Amet Consectetur adipisicing elit. Nunc Uilamcorper Scelerisque Mi, In Malesuada Felis Malescuada Vel</p>
      </div>
      <div className='contai-testi'> 
        <img className='img-testimonial' src='https://res.cloudinary.com/dmaviub4l/image/upload/v1655844806/cr6kd6zfkkalrsu4lcde.png' alt='testimonial2'/>
        <br/>
        <p className='name'>Vera Duncan</p>
        <p className='text'>Lorem Ipsum Dolor Sit Amet Consectetur adipisicing elit. Nunc Uilamcorper Scelerisque Mi, In Malesuada Felis Malescuada Vel</p>
      </div>
      <div className='contai-testi'> 
        <img className='img-testimonial' src='https://res.cloudinary.com/dmaviub4l/image/upload/v1655844968/powrop000l5nqhv084eu.png' alt='testimonial3'/>
        <br/>
        <p className='name'>Mark Smith</p>
        <p className='text'>Lorem Ipsum Dolor Sit Amet Consectetur adipisicing elit. Nunc Uilamcorper Scelerisque Mi, In Malesuada Felis Malescuada Vel</p>
      </div>
      </div>
    </section>
  )
}

export default Testimonials