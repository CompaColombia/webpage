import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(true);
  console.log(openMenu);

  const storeScroll = () => {
    console.log(window.scrollY)
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
    console.log(storeScroll)
    console.log(openMenu)
    
  }, window.scrollY);


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
            <li> <Link to='/agro' > Agro </Link> </li>
            <li> <Link to='/tech' > Tecnología </Link> </li>
            <li> <Link to='/edu' > Educación </Link> </li>
            <li> <Link to='/mercado' > Mercado </Link> </li>
          </ul> :
          <AiOutlineMenu className='AiOutlineMenu' />
          }
        </div>
      </nav>
    </>
  );
}


export default Navbar;
