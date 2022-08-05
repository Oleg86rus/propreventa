import React from 'react';
import { analyzesDescriptionConst } from '../../utils/constants';
import { style } from '../../utils/constants';
const AnalyzesDescription = () => {
  const {title, description, href, list, listTitle} = analyzesDescriptionConst;
  const {p,h1, ul, div, li, button} = style;
  return (
    <div className='flex flex-col p-4'>
      <h1 className={h1}>{title}</h1>
      <p className={p}>{description}</p>
      <p className={ul}>{listTitle}</p>
      <ul className={ul}>
        {list.map((el, i) => <li key={i} className={li}>{el}</li>)}
      </ul>
      <div className='flex justify-center p-4'>
        <button className={button}>
          <a href={href} target='_blank' >Перейти на ДНКОМ</a>
        </button>
      </div>
      
    </div>
  );
};

export default AnalyzesDescription;