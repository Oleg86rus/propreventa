import React from 'react';
import { checkupsDescriptionConst } from '../../utils/constants';

const CheckupsDescription = () => {
  const listStyleClassName = 'list-disc mb-1';
  return (
    <div className='container p-4'>
      <h1 className=''>{checkupsDescriptionConst[0]}</h1>
      <ul className='p-4'>
        <li className={listStyleClassName}>{checkupsDescriptionConst[1]}</li>
        <li className={listStyleClassName}>{checkupsDescriptionConst[2]}</li>
        <li className={listStyleClassName}>{checkupsDescriptionConst[3]}</li>
      </ul>
    </div>
  );
};

export default CheckupsDescription;