import React, { useRef, useState } from 'react';
import './stylesNavbar.css';

const NavBar = () => {
  const[menuToggle, setMenuToggle] = useState(false);
  const refNav = useRef();
  const refMenu = useRef();
  const refBtnToggle = useRef();

  const handleToggle = ()=>{
      if(menuToggle){
          setMenuToggle(false)
          refMenu.current.style.left = '-100%'          
      }else{
          setMenuToggle(true)
          const calculate = refNav.current.offsetLeft + refNav.current.clientHeight -1;
          refMenu.current.style.left = calculate+'px'          
      }
  }
  return (
    <header>
      <div ref={refNav} className='cont-menu'>
        <div className='menu'>
          <p className='logo'>Digital Agency</p>
          <button onClick={handleToggle} ref={refBtnToggle} className='bt-menu' type='button'>
            <i className="fas fa-bars"></i>
            </button>
        </div>
        <nav>
          <ul ref={refMenu}>
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