import React from 'react';
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Allies() {

  const array = [ 
    {
      img: 'arroyave.png',
      link: 'https://semillasarroyave.com/'
    },
    {
      img: 'ball.png',
      link: 'https://ballsb.com/es/nosotros'
    },
    {
      img: 'fee.png',
      link: 'https://www.feecolombia.org/'
    },
    {
      img: 'rioplant.jpeg',
      link: 'https://rioplant.com/'
    },
    {
      img: 'saenzfety.png',
      link: 'https://saenzfety.com/'
    },
  ]

  return (
    <div className='allies'>
      <h1>Los compas de Compa</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="myswiper"
      >
        {array.map((item, key) => {
          return <SwiperSlide key={key} >
            <a href={item.link} target="_blank">
            <img 
              alt={`logo de ${item.img}`}
              src={`allies/${item.img}`}  
            />
            </a>
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  );
}

export default Allies;
