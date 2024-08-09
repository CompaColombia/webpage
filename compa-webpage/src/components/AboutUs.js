function AboutUs() {

  return (
    <section className="aboutUs">
      <div className="top">
        <h2>Sobre Nosotros</h2>
        <p>
          En Compa contamos con un equipo enfocado en el desarrollo tecnológico y
          la construcción de soluciones creativas para el sector floricultor, horticultor
          e industrial. Nuestra pasión radica en trabajar estrechamente con nuestros
          aliados y clientes para elaborar valiosas innovaciones en cada uno de los
          procesos adaptados a sus necesidades.
        </p>
      </div>
      <button onClick={() => window.open('https://linktr.ee/compa.colombia', "_blank")}>Descubre más</button>
    </section>
  );
}

export default AboutUs;