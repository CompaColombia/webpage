import { useEffect, useState } from 'react';

function Title() {

  const [text, setText] = useState('')
  const words = ['Hola Mundo', 'Adios Mundo', 'React es genial', 'Prueba CSSTransition'];

  let index = 0;

  const changeWord = () => {
    setText(words[index])
      index = (index + 1) % words.length;
  }

  useEffect(() => {
    setInterval(() => {
      changeWord()
    }, 2000)
  }, [])

  return (
    <div className='title' id='home'>
      <p>
        <b>Desarrollamos soluciones tecnológicas para <br />
          <span className='asd'>{text}</span>
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
