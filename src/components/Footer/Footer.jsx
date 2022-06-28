import React from 'react'
import './stylesFooter.css'
const Footer = () => {
  return (
    <footer>
      <div className='cont-tot'>
      <div className='container'>
        <h3>Digital Agency</h3>
        <p className='text'>Building Digital products, Brands & Experience</p>
      </div>
      <div className='container'>
      <h3>Resources</h3>
      <ul>
        <li>Guides</li>
        <li>Blog</li>
        <li>Customer Stories</li>
        <li>Glossery</li>
      </ul>
      </div>
      <div className='container'>
      <h3>Company</h3>
      <ul>
        <li>About Us</li>
        <li>Careers</li>
        <li>Partners</li>
        <li>Contact Us</li>
      </ul>
      </div>
      <div className='container'>
      <h3>Social Media</h3>
      <ul>
        <li>LinkedIn</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
      </div>
      </div>
      <p>® Matheus. Todos los direitos reservados</p>
    </footer>
  )
}

export default Footer