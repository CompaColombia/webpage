import React from 'react';
import Title from '../components/Title';
import Allies from '../components/Allies';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Projects from '../components/Projects';
import ProjectsResponsive from '../components/ProjectsResponsive';
import AboutUs from '../components/AboutUs';
import VideoSection from '../components/VideoSection';

function Home() {
  
  const longText = 'Desarrollamos soluciones tecnológicas para '
  const shortText = 'Desarrollamos tecnología para ';

  const longWordsArray = ['Propagación', 'Riegos motorizados', 'Invernaderos automatizados', 'Maquinaria para viveros']
  const shortWordsArray = ['Propagación', 'Viveros', 'Plantulación', 'Riego', 'Invernaderos', 'Sustratos'];

  const width = window.outerWidth;

  const titleText = width < 800 ? shortText : longText;
  const wordsArray = width < 800 ? shortWordsArray : longWordsArray;
  const projectSection = width < 800 ? <ProjectsResponsive /> : <Projects />;

  return (
    <div className='home'>
      <Title
        titleText={titleText}
        words={wordsArray}
        extraText={<h1>Sé <span className='underlined'>Compa</span> del campo</h1>}
      />
      {/* <VideoSection /> */}
      <AboutUs />
      {projectSection}
      <Services />
      <p className='home-text'>Tecnificamos el presente para <span>cultivar</span> un futuro eficiente</p>
      <Allies />
      <Contact />
    </div>
  );
}

export default Home;
