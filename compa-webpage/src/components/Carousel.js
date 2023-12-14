function Carousel({items}) {

  return (
    <div className="custom-scroll">
      <div className="carrusel">
        {items?.map(item => (
          <div key={item} className="carrusel-item"></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
