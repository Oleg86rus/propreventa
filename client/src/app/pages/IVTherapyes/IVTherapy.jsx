import React from 'react';

import { useSelector } from 'react-redux';
import { getIVTherapyes } from '../../store/IVTherapyes';

const IVTherapyesList = () => {
  const IVTherapy = useSelector(getIVTherapyes());
  
  return (
    <>
      <div className=''>
        <h1 className={h1}>{name}</h1>
        <p className={p}>{description}</p>
        <p className={p_Price}>{price}</p>
        <p className={ul}>Состав:</p>
        <ul>
          {composition.map((el, i) => <li className={li} key={i}>{el}</li>)}
        </ul>
      </div>
    </>
  );
};

export default IVTherapyesList;