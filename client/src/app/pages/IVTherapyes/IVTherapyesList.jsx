import React from 'react';
import Navbar from '../../components/ui/navBar/navBar';
import CardList from '../../components/ui/card/cardList';
import { useSelector } from 'react-redux';
import { getDroppers } from '../../store/droppers';

const IVTherapyesList = () => {
  const droppers = useSelector(getDroppers());
  
  return (
    <>
      <Navbar/>
      <CardList products={droppers}/>
    </>
  );
};

export default IVTherapyesList;