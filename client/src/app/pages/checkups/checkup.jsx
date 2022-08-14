import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getCheckupsByIds
} from '../../store/checkups';
import { useParams } from 'react-router-dom';
import { style } from '../../utils/constants';
import BackButton from '../../components/common/backButton';
import {
  getCurrentUserId,
  getIsLoggedIn,
  getUserById,
} from '../../store/users';
import DeleteButton from '../../components/common/deleteButton';
import Loader from '../../components/ui/loader';

const Checkup = () => {
  const { checkupsId } = useParams();
  const isAuth = useSelector(getIsLoggedIn());
  const checkup = useSelector(getCheckupsByIds(checkupsId));
  const { name, composition, description, price } = checkup;
  const {h1, h2, li, ul, p_Price} = style;

  return (
    <>
      { checkup ?
        <div className='mx-auto container relative mt-15 min-h-[1000px]'>
          <BackButton/>
          {isAuth ? <DeleteButton id={checkupsId}/> : null}
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
        : <Loader/>}
    </>
  );
};

export default Checkup;