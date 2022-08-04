import React from 'react';
import { useSelector } from 'react-redux';
import { getCheckupsByIds } from '../../store/checkups';
import { useParams } from 'react-router-dom';
import { style } from '../../utils/constants';

const Checkup = () => {
  const {checkupsId} = useParams();
  const { div, name, composition, description, price } = useSelector(getCheckupsByIds(checkupsId));
  const {h1, li, ul, p, p_Price} = style;
  return (
    <div className=''>
      <h1 className={h1}>{name}</h1>
      <p className={p}>{description}</p>
      <p className={p_Price}>{price}</p>
      <p className={ul}>Состав:</p>
      <ul>
        {composition.map((el, i) => <li className={li} key={i}>{el}</li>)}
      </ul>
    </div>
  );
};

export default Checkup;