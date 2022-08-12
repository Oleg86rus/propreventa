import React from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../../../assets/specialOffer/путешественник-01.jpg';
import img2 from '../../../assets/specialOffer/клещ-02.jpg';
import img3 from '../../../assets/specialOffer/дефицитВитаминов-07.jpg';
import img4 from '../../../assets/specialOffer/ссз-05.jpg';
import img5 from '../../../assets/specialOffer/иппп-04.jpg';
import img6 from '../../../assets/specialOffer/детскиеИнфекции-04.jpg';
import img7 from '../../../assets/specialOffer/госпитализация-04.jpg';
import img8 from '../../../assets/specialOffer/витаминД-03.jpg';
import img9 from '../../../assets/specialOffer/биохимия-02.jpg';
import Loader from '../loader';
import { style } from '../../../utils/constants';

const Slider = () => {
  const userSlider = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const {h1} = style;
  setTimeout(() => {
    return <Loader/>;
  }, 1000);
  return (
    <>
      <div className='overflow-auto mt-10 mb-10'>
        <h1 className={h1}>Акции</h1>
        <div className=' relative rounded-lg w-full h-full border-2 border-amber-600'>
          <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-[10px] overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
            <Swiper
              loop={true}
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              autoplay='300'
            >
              {userSlider.map( (el, i) => (
                <SwiperSlide key={i}>
                  <img className='w-full h-full object-center object-cover' src={el} alt="promo"/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;