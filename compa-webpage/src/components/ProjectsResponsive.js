import { useState } from "react";
import CarouselProjects from "./CarouselProjects";
import compa2024 from "../compa2024.pdf"

export default function ProjectsResponsive() {

  const items = [
    {
      "title": "Línea de siembra",
      "image":"/images/IMG_1620.jpg",
      "text": "Descubra la revolución en propagación con las líneas de siembra y múltiples módulos adaptados a las necesidades de cada cliente, garantizamos una siembra precisa y eficiente."
    },
    {
      "title": "Mezcladora Sustrato",
      "image": "/images/IMG_1319.jpg",
      "text": "Simplifique su proceso de mezcla y precise los componentes para su plantulación con nuestra máquina mezcladora."
    },
    {
      "title": "Invernaderos de alta tecnología",
      "image": "/images/IMG_4436.jpg",
      "text": "Garantice un entorno ideal para el crecimiento de sus cultivos con el monitoreo y control de variables ambientales."
    },
    {
      "title": "Sistemas de riego móviles",
      "image": "/images/IMG_4441.jpg",
      "text": "Logre una irrigación uniforme sobre su cultivo con la movilidad y autonomía de nuestro solución innovadora para invernaderos"
    },
  ];

  return (
    <section id='Projects' className="projectsResponsive">
      
      <div className="top">
        <h2>Nuestros productos y proyectos</h2>
        <div><a onClick={() => window.open(compa2024, "_blank")}>Ver todos</a></div>
      </div>

      <div className="bottom">
        <CarouselProjects items={items}/> 
      </div>
    </section>
  );
}
