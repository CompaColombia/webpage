import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

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
        <a href='/#Title' className='navbar-logo'>
          <img className='title-logo'
            alt='Compa logo'
            src='/images/compa negro.png'
          />
          <img className='title-logo-small'
            alt='Compa logo'
            src='/images/logo-small.png'
          />
        </a>
        <div className='menu-section' style={ openMenu ? {'background': 'white'} : {'background': '#52D766'}} onClick={() => setOpenMenu(!openMenu)} >
          {openMenu ?
            <ul>
              <li> <a href='/#Title' > Inicio </a> </li>
              <li> <a href='#Projects' > Productos y proyectos </a> </li>
              <li> <a href='#Services' > Servicios </a> </li>
              <li> <a href='#Contact' > Contacto </a> </li>
            </ul> :
            <AiOutlineMenu className='AiOutlineMenu' />
          }
        </div>
      </nav>
    </>
  );
}


export default Navbar;
