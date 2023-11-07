import React from 'react';
import CardItem from './CardItem';

function Team() {
  return (
    <div className='team'>
      <h1>Conoce a tus compas</h1>
      <h3>Un grupo de ingenieros apasionados por la innovación</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='team/david.jpeg'
              label='David'
            />
            <CardItem
              src='team/jeyson.jpeg'
              label='Jeyson'
            />
            <CardItem
              src='team/harold.jpeg'
              label='Harold'
            />
          </ul>
        </div>
      </div>
      <div className="compa-line"></div>
    </div>
  );
}

export default Team;
