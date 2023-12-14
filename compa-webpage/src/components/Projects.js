import { useState } from "react";


function Projects() {

  const [itemSelected, setItemSelected] = useState(0)

  const items = [
    {
      "title": "Línea automatizada de siembra",
      "image": "https://www.deere.com//assets/images/region-2/products/russia/planters/1755_r4g023090_block_large_295e642837ef7f436fb0c4c9c55854023352550a.jpg",
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
    <section className="projects">
      <div className="top">
        <p>Nuestros productos y proyectos</p>
        <button>Ver todos</button>
      </div>
      <div className="bottom">
        <ul>
          {items?.map((item, key) => (
            <li onClick={() => setItemSelected(key)} key={key}>
              <h3>{item.title}</h3>
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