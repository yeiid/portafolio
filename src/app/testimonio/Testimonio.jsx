import React from 'react'
import './testimonio.css'
import Data from './Datos'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";




const Testimonio = () => {
  return (
    <section className="testimonio container section">
        <h2 className="section__title">My clients say</h2>
        <span className="section__subtitle">Testimonial</span>

    <Swiper className="testimonios__container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 48,
              },
            }}
            modules={[Pagination]}
    >

      {Data.map(({id,image,title,description}) => {
        return(
          <SwiperSlide className="testimonio__card" key={id}>
            <img src={image}  alt="" className='testimonio__img'/>

            <h3 className="testimonio__name">{title}</h3>
            <p className="testimonio__descriotion">{description}</p>
          </SwiperSlide>
        )
      })}
    </Swiper>

    </section>
  )
}

export default Testimonio