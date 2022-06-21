import React from 'react';
import './stylesNavbar.css';

const NavBar = () => {
  return (
    <header>        
        <div className='menu'>
            <a href='#'><i className="fas fa-bars"></i>Digital Agency</a>
        </div>        
        <nav>
            <ul>
                <li><a href='#'>home</a></li>
                <li><a href='#'>about</a></li>
                <li><a href='#'>testimonials</a></li>
                <li><a href='#'>contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar