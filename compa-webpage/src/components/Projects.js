import { useState } from "react";

function Projects() {

  const [itemSelected, setItemSelected] = useState(0)

  const items = [
    {
      "title": "Línea automatizada de siembra",
      "image":"/images/compa negro.png",
      "text": "Descripción de la máquina "
    },
    {
      "title": "Mezcladora Sustrato",
      "image": "https://autoagromachines.com/wp-content/uploads/2023/01/autonomous-agro-machines-iplantforest-forestbot-forest-bot-img876886871-1.jpg",
      "text": "Descripción de la máquina "
    },
    {
      "title": "Invernaderos de alta tecnología",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Volante_Farms_greenhouse.jpg/1200px-Volante_Farms_greenhouse.jpg",
      "text": "Descripción de la máquina "
    },
    {
      "title": "Sistemas de riego automatizados",
      "image": "https://autoagromachines.com/wp-content/uploads/2023/01/autonomous-agro-machines-iplantforest-forestbot-forest-bot-img876886871-1.jpg",
      "text": "Descripción de la máquina "
    },
  ];

  return (
    <section id='Projects' className="projects">
      <div className="top">
        <p><b>Nuestros productos <br />y proyectos</b></p>
        <a href='/tech'>Ver todos</a>
      </div>
      <div className="bottom">
        <ul>
          {items?.map((item, key) => (
            <li onClick={() => setItemSelected(key)} key={key}>
              <p className="machine-title" style={key === itemSelected ? {"color": "black"} : {"color": "lightgrey"}}>{item.title}</p>
              {key === itemSelected ? <p>{item.text}</p> : "" }
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