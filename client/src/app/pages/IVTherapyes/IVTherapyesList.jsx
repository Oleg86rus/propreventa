import React from 'react';
import Navbar from '../../components/ui/navBar/navBar';
import CardList from '../../components/ui/card/cardList';
import { useSelector } from 'react-redux';
import { getIVTherapyes } from '../../store/IVTherapyes';
import IVTherapyesDescription
  from '../../components/common/ivTherapyesDescription';
import { useHistory, useParams } from 'react-router-dom';
import IVTherapy from './IVTherapy';

const IVTherapyesList = () => {
  const IVTherapyes = useSelector(getIVTherapyes());
  const {location} = useHistory();
  const {pathname} = location;
  const pathNames = pathname.split('/').filter((el) => el);
  return (
    <>
      <Navbar/>
      {pathNames[1] ? <IVTherapy/>
        : <div className='flex flex-col items-center'>
          <IVTherapyesDescription/>
          <CardList products={IVTherapyes}/>
        </div>
      }
    </>
  );
};

export default IVTherapyesList;