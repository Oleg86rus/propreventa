import React from 'react';
import { useSelector } from 'react-redux';
import { getDoctorsByIds } from '../../store/doctors';
import { useParams } from 'react-router-dom';
import { style } from '../../utils/constants';
import BackButton from '../../components/common/backButton';

const DoctorList = () => {
  const {doctorId} = useParams();
  const { name, imageSrc, imageAlt, skills, href } = useSelector(getDoctorsByIds(doctorId));
  const {ul, li, h1} = style;
  
  return (
    <div className='mx-auto relative container flex justify-center mt-10 mb-10'>
      <BackButton/>
      {skills &&
      <div className=' pt-16 max-w-lg flex flex-col items-center gap-2'>
        <div
          className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-[10px] overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <h1 className={h1}>{name}</h1>
        <p className={ul}>{!skills ? 'Состав:' : 'Должности'}</p>
        <ul>
          {skills.map((el, i) => <li className={li} key={i}>{el}</li>)}
        </ul>
        <button type='button'  className="inline-flex items-center px-4 py-2 border border-amber-500 rounded-[10px] shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-500">
          <a href={href} target='_blank'>Записаться онлайн</a>
        </button>
      </div>}
    </div>
  );
};

export default DoctorList;