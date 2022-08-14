import React from 'react';
import { useSelector } from 'react-redux';
import {
  getCheckupsByIds
} from '../../store/checkups';
import { useParams } from 'react-router-dom';
import { style } from '../../utils/constants';
import BackButton from '../../components/common/backButton';
import { getCurrentUserId, getUserById } from '../../store/users';
import DeleteButton from '../../components/common/deleteButton';

const Checkup = () => {
  const {checkupsId} = useParams();
  const userId = useParams();
  const user  = useSelector(getUserById(userId));
  const auth = user ? Object.keys(user).findIndex((el) => el === 'admin') : null;
  const { name, composition, description, price } = useSelector(getCheckupsByIds(checkupsId));
  const {h1, h2, li, ul, p, p_Price} = style;

  return (
    <div className='mx-auto container relative mt-15 min-h-[1000px]'>
      <BackButton/>
      {auth > 0 && <DeleteButton/>}
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
  );
};

export default Checkup;