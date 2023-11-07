import { Link } from 'react-router-dom';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          {/* <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img className='title-logo'
                alt='Travel Image'
                src='/logo.webp'
              />
              COMPA
            </Link>
          </div> */}
          <div className='website-rights'>
            Cel. 321 3934675<br/>
            gestion@compa.com.co
          </div>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              // to='/facebook.com'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebookF />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/compa.colombia/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link twitter'
              // to='/linkedin.com'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedinIn />
            </Link>
          </div>
          <small className='website-rights'>Hecho por COMPA © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
