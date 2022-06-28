import React from 'react';
import './stylesNavbar.css';

const NavBar = () => {
  return (
    <header>
      <div className='cont-menu'>
        <div className='menu'>
          <a href='#home' className='bt-menu'><span>Digital Agency</span><i className="fas fa-bars"></i></a>
        </div>
        <nav>
          <ul>
            <li><a href='#home'>home</a></li>
            <li><a href='#about'>about</a></li>
            <li><a href='#testimonials'>testimonials</a></li>
            <li><a href='#contact'>contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar