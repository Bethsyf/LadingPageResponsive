import React, { useState } from 'react';
import './stylesNavbar.css';

const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
      setToggle(!toggle);
    }
  return (
    <header className='cont-navbar'>
      <nav className='container'>
        <div className='navb'>
          <p className='logo'>Digital Agency</p>
          <button onClick={handleToggle} className='bt-menu' type='button'>
            <i className="fas fa-bars"></i>
            </button>
        </div>
        <div className='cont-menu'>
          <ul className={
          toggle ? "menu" : "menu-hidden"
        }>
            <li className='item'><a className='link' href='#home'>home</a></li>
            <li className='item'><a className='link' href='#about'>about</a></li>
            <li className='item'><a className='link' href='#testimonials'>testimonials</a></li>
            <li className='item'><a className='link' href='#contact'>contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBar