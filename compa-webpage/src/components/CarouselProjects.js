export default function CarouselProjects({ items }) {

  return (
    <div className="custom-scroll">
      <div className="carousel">
        {items?.map(item => (
          <div key={item} className="carousel-item" style={{ "background-image": `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})` }}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
