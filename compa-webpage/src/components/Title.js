import { useState, useEffect } from 'react';


function Title() {

  const [text, setText] = useState('')
  const words = ['Líneas de propagación', 'Maquinaria para sustratos','Riegos motorizados', 'Invernaderos automatizados', 'Maquinaria para viveros' ];

  let index = 0;

  const changeWord = () => {
    setText(words[index])
      index = (index + 1) % words.length;
  }

  useEffect(() => {
    setInterval(() => {
      changeWord()
    }, 1000)
  }, [])
  
  return (
    <div className='title' id='Title'>
      <p>
        <b>Desarrollamos soluciones tecnológicas para <br/>
          <span className='contenedor-texto' id='miContenedor'>    
            <p className='p-animated'>  
              {text}
            </p>     
          </span>
        </b>
      </p>
      <div>
        <h1>Sé <span>Compa</span> del campo</h1>
        {/* <Download /> */}
      </div>
    </div>
  );
}



export default Title;
