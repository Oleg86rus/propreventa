import React from 'react';
import {
  ultrasoundsDescriptionConst,
} from '../../utils/constants';
import { style } from '../../utils/constants';

const UltrasoundsDescription = () => {
  const {title, description, propreventUzi} = ultrasoundsDescriptionConst;
  const {h1, p} = style;
  
  return (
    <div className='container p-4 max-w-[970px]'>
      <h1 className={h1}>{title}</h1>
      <p className={p}>{description}</p>
      <p className={p}>{propreventUzi}</p>
    </div>
  );
};

export default UltrasoundsDescription;