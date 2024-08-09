export default function Carousel({ items }) {

  function openLink(link) {
    window.open(link, "_blank");
}

return (
  <div className="custom-scroll">
    <div className="carrusel">
      {items?.map(item => (
        <div key={item} className="carrusel-item">
          <img src={item.img} style={{ height: '160px', padding: '30px' }} onClick={() => openLink(item.link)} />
        </div>
      ))}
    </div>
  </div>
);
}
