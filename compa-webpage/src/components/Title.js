import { useState, useEffect } from 'react';


function Title({ titleText, words = false, extraText = false }) {
  
  const [text, setText] = useState('')

  let index = 0;

  const changeWord = () => {
    setText(words[index])
    index = (index + 1) % words.length;
  }

  useEffect(() => {
    if (words) {
      setInterval(() => {
        changeWord()
      }, 1000)
    }
  }, [])

  return (
    <div className='title' id='Title'>
      <div className='titleText'>{titleText}</div>
      {words ? <div className='animated-text'> {text} </div> : ''}
      {extraText ? extraText : ''}
    </div>
  );
}



export default Title;
