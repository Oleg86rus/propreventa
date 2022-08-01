import React from 'react';
import Navbar from '../components/ui/navBar/navBar';
import CardList from '../components/ui/card/cardList';
import { useSelector } from 'react-redux';
import { getCheckups } from '../store/checkups';

const Checkups = () => {
  const Checkups = useSelector(getCheckups());
  console.log(Checkups);
  return (
    <div>
      <Navbar/>
      <CardList/>
    </div>
  );
};

export default Checkups;