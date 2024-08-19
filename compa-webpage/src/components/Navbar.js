import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { AiOutlineMenu } from 'react-icons/ai';

function menuOptions(responsive = false) {
  const optionList = 
    <ul >
      <li> <a href='/#Title' > Inicio </a> </li>
      <li> <a href='#Projects' > Productos y proyectos </a> </li>
      <li> <a href='#Services' > Servicios </a> </li>
      <li> <a href='#Contact' > Contacto </a> </li>
    </ul>

  return (
    responsive ? <Modal isOpen={true} children={
      optionList
    }/> :
    optionList
  )
}

export default function Navbar() {
  const width = window.outerWidth;
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
      <nav className='navbar'>
        <a href='/#Title' className='logo-section'>
          <img className='title-logo'
            alt='Compa logo'
            src='/images/compa negro.png'
          />
          <img className='title-logo-small'
            alt='Compa logo'
            src='/images/logo-small.png'
          />
        </a>
        <div className='menu-section' style={openMenu ? { 'background': 'white' } : { 'background': '#52D766' }} onClick={() => setOpenMenu(!openMenu)} >
          {openMenu ? menuOptions(width < 800) : <AiOutlineMenu className='AiOutlineMenu' />}
        </div>
      </nav>
    </>
  );
}
