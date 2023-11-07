import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ path }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  };

  const outOfHome = path !== '/'

  const navbarStyle = outOfHome ? {
    backgroundColor: '#252525',
    boxShadow: '0 0 .5em rgba(0, 0, 0, .5)'
  } : {}

  // Listen for new scroll events
  document.addEventListener('scroll', storeScroll);

  // Update scroll position for first time
  storeScroll();


  return (
    <>
      <div className='background-navbar'>
        <nav className='navbar' style={navbarStyle}>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu} style={outOfHome ? { display: 'flex' } : {}}>
              <img className='title-logo'
                alt='Travel Image'
                src='/images/compa negro.png'
                style={outOfHome ? { display: 'block' } : {}}
              />
              {/* COMPA */}
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} style={outOfHome ? { justifyContent: 'end' } : {}}>
              <li className='nav-item'>
                <Link
                  to='/agro'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Agro
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/tech'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Tecnología
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/edu'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Educación
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/mercado'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Mercado
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
