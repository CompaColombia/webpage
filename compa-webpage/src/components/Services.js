import { TbWorldSearch, TbTool } from "react-icons/tb";
import { FaHelmetSafety, FaGear } from "react-icons/fa6";


function Services() {

  const items = [
    {
      "title": "Diseño",
      "image": <TbWorldSearch color="rgb(82, 215, 102, 0.8)"/>,
      "text": "Exploramos los objetivos y problemas de tu proceso. Analizamos y estudiamos la mayor cantidad de aspectos y características acerca de tu necesidad para ofrecerte la mejor solución."
    },
    {
      "title": "Fabricación",
      "image": <TbTool color="rgb(82, 215, 102, 0.8)"/>,
      "text": "Convertimos tus ideas en mecanismos o sistemas facilitando su visualización realista y detallada mediante prototipos renderizados en TRES-D. También puedes explorar nuevas opciones con las soluciones de nuestros aliados."
    },
    {
      "title": "Ejecución",
      "image": <FaHelmetSafety color="rgb(82, 215, 102, 0.8)"/>,
      "text": "Con un amplio catalogo de soluciones para adquirir, nuestro equipo ajusta todo lo necesario para instalar o implementar la solución en tu proceso, considerando minuciosamente cada aspecto para garantizar su funcionamiento"
    },
    {
      "title": "Mejora",
      "image": <FaGear color="rgb(82, 215, 102, 0.8)"/>,
      "text": "Nuestra dedicación va más allá de proporcionar maquinaria excepcional; Nuestro equipo está aquí para respaldarte con mantenimiento regular, asistencia técnica y soluciones adaptadas a tus necesidades."
    },
  ];

  return (
    <section className="services">
      <div className="top">
        <h2>Nuestros servicios</h2>
        <p>Ayudamos a nuestros clientes a explorar a través de diferentes facilidades para desarrollar u ofrecer el mejor sistema o concepto según sea identificado.</p>
      </div>
      <div className="cards">
        {items?.map((item, key) => (
          <div key={key} className="card">
            <h2>{item.title}</h2>
            <div>{item.image}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;