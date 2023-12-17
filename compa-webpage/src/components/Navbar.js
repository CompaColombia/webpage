import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(true);

  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  };

  // Listen for new scroll events
  document.addEventListener('scroll', storeScroll);

  // Update scroll position for first time
  storeScroll();

  useEffect(() => {
    if (storeScroll === 0) {
      setOpenMenu(true)
    } else { setOpenMenu(false) }

  }, [window.scrollY]);


  return (
    <>
      <nav>
        <Link to='/' className='navbar-logo'>
          <img className='title-logo'
            alt='Compa logo'
            src='/images/compa negro.png'
          />
          <img className='title-logo-small'
            alt='Compa logo'
            src='/images/logo-small.png'
          />
        </Link>
        <div className='menu-section' onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ?
            <ul>
              <li> <a href='#footer' > Productos y proyectos </a> </li>
              <li> <a href='#footer' > Servicios </a> </li>
              <li> <a href='#footer' > Contacto </a> </li>
            </ul> :
            <AiOutlineMenu className='AiOutlineMenu' />
          }
        </div>
      </nav>
    </>
  );
}


export default Navbar;
