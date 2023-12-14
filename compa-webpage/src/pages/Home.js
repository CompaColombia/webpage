import React from 'react';
import Title from '../components/Title';
import Allies from '../components/Allies';
import Contact from '../components/Contact';
import Services from '../components/Services';

function Home() {
  return (
    <div className='home'>
      <Title />
      <Services />
      <p className='home-text'>Tecnificamos el presente para <span>cultivar</span> un futuro eficiente</p>
      <Allies />
      <Contact />
    </div>
  );
}

export default Home;
