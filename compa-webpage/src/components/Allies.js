import Carousel from "./Carousel";

function Allies() {

  const array = [
    {
      img: 'arroyave.png',
      link: 'https://semillasarroyave.com/'
    },
    {
      img: 'ball.png',
      link: 'https://ballsb.com/es/nosotros'
    },
    {
      img: 'fee.png',
      link: 'https://www.feecolombia.org/'
    },
    {
      img: 'rioplant.jpeg',
      link: 'https://rioplant.com/'
    },
    {
      img: 'saenzfety.png',
      link: 'https://saenzfety.com/'
    },
  ]

  const items = [1, 2, 3, 4, 5];

  return (
    <div className="allies">
      <h3>Los compas de compa</h3>
      <p>Sabemos que para llegar lejos debemos estar acompañados de los mejores, te presentamos a nuestros aliados y clientes.</p>
      <Carousel items={items}/>
    </div>
  );
}

export default Allies;
