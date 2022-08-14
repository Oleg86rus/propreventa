import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/ui/navBar/navBar';
import CardList from '../components/ui/card/cardList';
import { getUltrasounds } from '../store/ultrasounds';
import UltrasoundsDescription from '../components/common/ultrasoundsDescription';
import Loader from '../components/ui/loader';

const UltrasoundsList = () => {
  const ultrasounds = useSelector(getUltrasounds());
  
  return (
    <>
      <Navbar/>
      <div className='flex flex-col items-center'>
        <UltrasoundsDescription/>
        {ultrasounds ?
          <CardList products={ultrasounds}/>
          : <Loader/>}
      </div>
    </>
  );
};

export default UltrasoundsList;