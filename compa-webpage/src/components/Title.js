import Download from './Download'


function Title() {
  
  return (
    <div className='title' id='Title'>
      <p>
        <b>Desarrollamos soluciones tecnológicas para <br/>
        <span className='contenedor-texto' id='miContenedor'>Propagacion</span></b>
      </p>
      <div>
        <h1>Sé <span>Compa</span> del campo</h1>
        {/* <Download /> */}
      </div>
    </div>
  );
}


function mostrarPalabra() {

  var contenedor = document.getElementById('miContenedor');
  var palabras = ["Palabra1"];
  var index = 0;

  if (index < palabras.length) {
    contenedor.innerHTML = palabras[index] + ' ';

    // Espera un momento antes de mostrar la siguiente palabra
    setTimeout(function() {
      contenedor.style.width = contenedor.scrollWidth + 'px'; // Ajusta el ancho según el contenido

      // Después de expandir completamente, hace el texto completamente visible
      contenedor.style.color = '#fff'; // Texto blanco completamente visible

      // Espera un momento antes de contraer
      setTimeout(function() {
        contenedor.style.width = '0';
        contenedor.style.color = 'rgba(255, 255, 255, 0)'; // Texto blanco opaco al contraer el contenedor

        // Espera un momento antes de mostrar la siguiente palabra
        setTimeout(function() {
          index++;
          mostrarPalabra();
        }, 1000); // Ajusta el tiempo de espera antes de mostrar la siguiente palabra
      }, 1000); // Ajusta el tiempo de espera antes de la contracción
    }, 1000); // Ajusta el tiempo de espera antes de mostrar la siguiente palabra
  } else {
    // Si se llega al final de la lista, reinicia el bucle
    index = 0;
    setTimeout(function() {
      contenedor.innerHTML = ''; // Limpia el contenido cuando termina el ciclo
      mostrarPalabra();
    }, 1000); // Ajusta el tiempo de espera antes de reiniciar el bucle
  }
}


export default Title;
