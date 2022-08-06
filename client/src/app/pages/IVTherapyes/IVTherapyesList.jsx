import React from 'react';
import Navbar from '../../components/ui/navBar/navBar';
import CardList from '../../components/ui/card/cardList';
import { useSelector } from 'react-redux';
import { getIVTherapyes } from '../../store/IVTherapyes';

const IVTherapyesList = () => {
  const IVTherapyes = useSelector(getIVTherapyes());
  
  return (
    <>
      <Navbar/>
      <CardList products={IVTherapyes}/>
    </>
  );
};

export default IVTherapyesList;