import React from 'react';
import { geneticResearchDescriptionConst } from '../../utils/constants';
import { style } from '../../utils/constants';

const GeneticResearchDescription = () => {
  const {title} = geneticResearchDescriptionConst;
  const {h1} = style;
  
  return (
    <div className='mx-auto p-4 container p-4 max-w-[970px]'>
      <h1 className={h1}>{title}</h1>
      <h1 className='text-5xl text-center'>Раздел находится в разработке!</h1>
    </div>
  );
};

export default GeneticResearchDescription;