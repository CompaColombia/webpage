import Carousel from "./Carousel";

function Allies() {

  const array = [
    {
      img: 'allies/elite.png',
      link: 'https://eliteflower.com/'
    },

    {
      img: 'allies/arroyave.png',
      link: 'https://semillasarroyave.com/'
    },
    {
      img: 'allies/ball.png',
      link: 'https://ballsb.com/es/nosotros'
    },
    {
      img: 'allies/saenzfety.png',
      link: 'https://saenzfety.com/'
    },
    {
      img: 'allies/fee.png',
      link: 'https://www.feecolombia.org/'
    },
  ]

  return (
    <div className="allies">
      <h2>Los compas de compa</h2>
      <p>Sabemos que para llegar lejos debemos estar acompañados de los mejores, te presentamos a nuestros aliados y clientes.</p>
      <Carousel items={array}/>
    </div>
  );
}

export default Allies;
