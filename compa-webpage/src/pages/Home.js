import React from 'react';
import Cards from '../components/Cards';
import Team from '../components/Team';
import Allies from '../components/Allies';
import Title from '../components/Title';

function Home() {
  return (
    <>
      <Title />
      <Cards />
      {/* <Team /> */}
      <Allies />
    </>
  );
}

export default Home;
