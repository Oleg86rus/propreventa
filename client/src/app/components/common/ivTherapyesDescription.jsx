import React from 'react';
import {
  IVTherapyesDescriptionConst,
} from '../../utils/constants';
import { style } from '../../utils/constants';
const IVTherapyesDescription = () => {
  const {title, droppersTitle, description, list} = IVTherapyesDescriptionConst;
  const {li, h1, h2, p, ul} = style;
  return (
    <div className='container p-4 max-w-[970px]'>
      <h1 className={h1}>{title}</h1>
      <h2 className={h2}>{droppersTitle}</h2>
      <p className={p}>{description}</p>
      <ul className={ul}>
        {list.map((el, i) => <li key={i} className={li}>{el}</li>)}
      </ul>
    </div>
  );
};

export default IVTherapyesDescription;