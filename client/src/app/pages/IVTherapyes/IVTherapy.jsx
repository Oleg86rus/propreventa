import React from 'react';

import { useSelector } from 'react-redux';
import { getIVTherapyByIds, getIVTherapyes } from '../../store/IVTherapyes';
import { useHistory, useParams } from 'react-router-dom';
import { style } from '../../utils/constants';
import BackButton from '../../components/common/backButton';

const IVTherapy = () => {
  const {IVTherapyId} = useParams();
  const {name, price, imageSrc, imageAlt, description, about, composition, result, curs, text} = useSelector(getIVTherapyByIds(IVTherapyId));
  const {ul, li, h1, p} = style;

  return (
    <div className='relative mx-auto container flex justify-center mt-10 mb-10'>
      <BackButton/>
      {name &&
      <div className='max-w-lg flex flex-col items-center gap-2'>
        <div
          className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-[10px] overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <h1 className={h1}>{name}</h1>
        <p className={p}>{about}</p>
        <p className={ul}>Состав капельницы:</p>
        <ul>
          {composition.map((el, i) => <li className={li} key={i}>{el}</li>)}
        </ul>
        <p className={ul}>Какой результат дает капельница?</p>
        <ul>
          {result.map((el, i) => <li className={li} key={i}>{el}</li>)}
        </ul>
        <button type='button'  className="inline-flex items-center px-4 py-2 border border-amber-500 rounded-[10px] shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-500">
          <a href='' target='_blank'>Записаться онлайн</a>
        </button>
      </div>}
    </div>
  );
};

export default IVTherapy;