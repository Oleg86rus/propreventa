import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

const sliderOnMainPage = () => {
  return (
    <>
      <Swiper
        loop={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </>
  );
};

export default sliderOnMainPage;