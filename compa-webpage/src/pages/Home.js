import React from 'react';
import Cards from '../components/Cards';
import Team from '../components/Team';
import Allies from '../components/Allies';
import HeroSection from '../components/HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      {/* <Team /> */}
      <Allies />
    </>
  );
}

export default Home;
