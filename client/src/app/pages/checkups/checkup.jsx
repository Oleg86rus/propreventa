import React from 'react';
import { useSelector } from 'react-redux';
import { getCheckupsByIds } from '../../store/checkups';
import { useParams } from 'react-router-dom';
import { style } from '../../utils/constants';
import firm from '../../assets/firma.JPG';

const Checkup = () => {
  const {checkupsId} = useParams();
  const { div, name, composition, description, price } = useSelector(getCheckupsByIds(checkupsId));
  const {h1, li, ul, p, p_Price} = style;
  return (
    <div>
      <h1 className={h1}>{name}</h1>
  
      <div className='flex'>
        <div className='relative'>
          <div className='absolute top-[25px] w-[150px] h-[150px] rounded-[100px] bg-amber-200 opacity-90'></div>
          <div className='w-[200px] h-[200px] rounded-[100px] bg-amber-600 opacity-80'></div>
        </div>
        <div className='bg-blue-300 backgroundImage-firm'>
          <p className={p}>{description}</p>
          <p className={p_Price}>{price}</p>
          <p className={ul}>Состав:</p>
          <ul>
            {composition.map((el, i) => <li className={li} key={i}>{el}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkup;