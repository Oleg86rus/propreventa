import React from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/navigation';

import Loader from '../../loader';
import { style } from '../../../../utils/constants';
import { useSelector } from 'react-redux';
import { getPromo } from '../../../../store/promo';

const Slider = () => {
  const promo = useSelector(getPromo());
  const {h1} = style;
  setTimeout(() => {
    return <Loader/>;
  }, 1000);
  return (
    <>
      {!promo ? <Loader/>
        : <div className='container overflow-auto mt-10 mb-10'>
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
                {promo.map( (el, i) => (
                  <SwiperSlide key={i}>
                    <img className='w-full h-full object-center object-cover' src={el.imageSrc} alt={el.imageAlt}/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>}
    </>
  );
};

export default Slider;