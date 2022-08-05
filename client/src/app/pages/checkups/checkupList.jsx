import React from 'react';
import Navbar from '../../components/ui/navBar/navBar';
import CardList from '../../components/ui/card/cardList';
import CheckupsDescription from '../../components/common/checkupsDescription';
import { useSelector } from 'react-redux';
import { getCheckups } from '../../store/checkups';
import { useParams } from 'react-router-dom';
import Checkup from './checkup';

const CheckupList = () => {
  const checkups = useSelector(getCheckups());
  const { checkupsId } = useParams();
  return (
    <>
      {!checkups ? 'Loading' :
        <div>
          <Navbar/>
          { checkupsId ? <Checkup/>
            :
            (<div className='flex flex-col items-center'>
              <CheckupsDescription/>
              <CardList products={checkups}/>
            </div>)
          }
        </div>}
    </>
  );
};

export default CheckupList;