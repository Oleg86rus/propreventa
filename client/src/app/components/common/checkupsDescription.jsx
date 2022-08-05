import React from 'react';
import { checkupsDescriptionConst } from '../../utils/constants';
import { style } from '../../utils/constants';
const CheckupsDescription = () => {
  const {title, listTitle, list} = checkupsDescriptionConst;
  const {li, h1, p, ul} = style;
  return (
    <div className='container p-4 max-w-[970px]'>
      <h1 className={h1}>{title}</h1>
      <p className={p}>{listTitle}</p>
      <ul className={ul}>
        {list.map((el, i) => <li key={i} className={li}>{el}</li>)}
      </ul>
    </div>
  );
};

export default CheckupsDescription;