import React from 'react';
import Title from '../components/Title';
import Allies from '../components/Allies';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Projects from '../components/Projects';
import AboutUs from '../components/AboutUs';
import VideoSection from '../components/VideoSection';

function Home() {
  return (
    <div className='home'>
      <Title />
      <VideoSection />
      <AboutUs />
      <Projects />
      <Services />
      <p className='home-text'>Tecnificamos el presente para <span>cultivar</span> un futuro eficiente</p>
      <Allies />
      <Contact />
    </div>
  );
}

export default Home;
