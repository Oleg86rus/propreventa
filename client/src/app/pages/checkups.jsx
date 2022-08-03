import React, { useEffect, useState } from 'react';
import Navbar from '../components/ui/navBar/navBar';
import CardList from '../components/ui/card/cardList';
import { useSelector } from 'react-redux';
import { getCheckups } from '../store/checkups';
import CheckupsDescription from '../components/common/checkupsDescription';
import { useHistory } from 'react-router-dom';
import { getDoctors } from '../store/doctors';
import { getDroppers } from '../store/droppers';
import { getGeneticResearch } from '../store/geneticResearch';

const Checkups = () => {
  const { location } = useHistory();
  const [products, setProducts] = useState([]);
  const checkups = useSelector(getCheckups());
  const doctors = useSelector(getDoctors());
  const droppers = useSelector(getDroppers());
  const geneticResearch = useSelector(getGeneticResearch());
  useEffect(() => {
    if (location.pathname === '/checkups') setProducts(checkups);
    if (location.pathname === '/droppers') setProducts(droppers);
    if (location.pathname === '/doctors') setProducts(doctors);
    if (location.pathname === '/geneticResearch') setProducts(geneticResearch);
  }, [location]);
  return (
    <>
      {location && products.length !== 0
        ?
        <div>
          <Navbar/>
          <CheckupsDescription/>
          <CardList products={products}/>
        </div>  : 'Загрузка...'
      }
    </>
  );
};

export default Checkups;