import React from 'react';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/wallpaper.mp4' autoPlay loop muted />
      <h1>Hola Compa</h1>
      <p>¿Listo para transformar el agro colombiano?</p>
      <div>
        <i className={'fa fa-arrow-down fa-1x'} />
      </div>
    </div>
  );
}

export default HeroSection;
