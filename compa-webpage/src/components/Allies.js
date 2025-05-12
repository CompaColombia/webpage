import Carousel from "./Carousel";

function Allies() {

  const array = [
    {
      img: 'allies/SmartSowing.png',
      link: 'https://www.smartsowing.com/es/'
    },
    {
      img: 'allies/Urbinati.png',
      link: 'https://www.urbinati.com/es/'
    },
    {
      img: 'allies/TheElite.png',
      link: 'https://eliteflower.com'
    },
    {
      img: 'allies/SaenzFety.png',
      link: 'https://saenzfety.com'
    },
    {
      img: 'allies/BallSB.png',
      link: 'https://www.ballsb.com/es'
    },
    {
      img: 'allies/plantula.png',
      link: 'https://www.plantulasdecolombia.com'
    },
    {
      img: 'allies/ImpulSemillas.png',
      link: 'https://www.impulsemillas.com'
    },
    {
      img: 'allies/FloraPlant.png',
      link: 'https://www.impulsemillas.com/nosotros/floraplant-2/'
    },
    {
      img: 'allies/unifortes.png',
      link: 'https://unifortes.com'
    },
    {
      img: 'allies/DATA.png',
      link: 'https://data-technologies.com'
    },
    {
      img: 'allies/SemillasArro.png',
      link: 'https://www.semillasarroyave.com '
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
