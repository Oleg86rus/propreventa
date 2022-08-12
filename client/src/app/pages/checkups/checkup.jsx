import React from 'react';
import { useSelector } from 'react-redux';
import { getCheckupsByIds } from '../../store/checkups';
import { useParams } from 'react-router-dom';
import { style } from '../../utils/constants';
import BackButton from '../../components/common/backButton';

const Checkup = () => {
  const {checkupsId} = useParams();
  const { div, name, composition, description, price } = useSelector(getCheckupsByIds(checkupsId));
  const {h1, h2, li, ul, p, p_Price} = style;
  return (
    <div className='container relative mt-10 mb-10'>
      <BackButton/>
      <h1 className={`${h1} mb-5`}>{name}</h1>
      <div className='flex flex-col items-center relative'>
        <div className='absolute'>
          <div className='absolute top-[70px] -left-[150px] w-[350px] h-[350px] rounded-full bg-amber-200 opacity-50'></div>
          <div className='w-[500px] h-[500px] rounded-full bg-amber-600 opacity-30'></div>
        </div>
        <div className='z-10 flex flex-col'>
          <p className={h2}>{description}</p>
          <p className={ul}>Состав:</p>
          <ul>
            {composition.map((el, i) => <li className={li} key={i}>{el}</li>)}
          </ul>
          <p className={p_Price}>Цена: {price} р.</p>
        </div>
      </div>
    </div>
  );
};

export default Checkup;