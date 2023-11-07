import React from 'react';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>¿Qué hacemos aquí?</h1>
      <div className='compa-line'></div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/agro.jpg'
              text='Asistencia en la comercialización de productos o servicios'
              label='Agro'
              path='/agro'
              bgColor='#4A8721'
            />
            <CardItem
              src='images/tech.jpg'
              text='Diseñamos soluciones a la medida de tus necesidades'
              label='Tecnología'
              path='/tech'
              bgColor='#0070C0'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/education.jpg'
              text='Conoce nuestros cursos y talleres prácticos'
              label='Educación'
              path='/edu'
              bgColor='#F6BB05'
            />
            <CardItem
              src='images/merch.jpg'
              text='Revisa los precios del mercado colombiano en tiempo real'
              label='Mercado'
              path='/mercado'
              bgColor='#c83838'
            />
            <CardItem
              src='images/contact.jpg'
              text='El cambio se logra trabajando en equipo'
              label='Contacto'
              bgColor='#843da5'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
