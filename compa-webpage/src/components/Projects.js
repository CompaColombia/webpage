import { useState } from "react";
// import compa2024 from "../compa2024.pdf"

function Projects() {

  const [itemSelected, setItemSelected] = useState(0)

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
      "image": "/images/InvernaderosAutomaticos.png",
      "text": "Garantice un entorno ideal para el crecimiento de sus cultivos con el monitoreo y control de variables ambientales."
    },
    {
      "title": "Sistemas de riego móviles",
      "image": "/images/CarrosRiego.png",
      "text": "Logre una irrigación uniforme sobre su cultivo con la movilidad y autonomía de nuestro solución innovadora para invernaderos"
    },
  ];

  return (
    <section id='Projects' className="projects">
      <div className="top">
        <h2>Nuestros productos y proyectos</h2>
        <div><a href="/form">Ver todos</a></div>
      </div>
      <div className="bottom">
        <ul>
          {items?.map((item, key) => (
            <li onClick={() => setItemSelected(key)} key={key}>             
              <p className="machine-title" style={key === itemSelected ? {"color": "black"} : {"color": "lightgrey"}}>{item.title}</p>
              {key === itemSelected ? <p className="machine-desc">{item.text}</p> : "" }
            </li>
          ))}
        </ul>
        <div className="images-section">
          <img src={items[itemSelected].image}></img>
        </div>
      </div>
    </section>
  );
}

export default Projects;