//need to fill bd and add this page

import React from 'react';
import Navbar from '../../components/ui/navBar/navBar';
import CardList from '../../components/ui/card/cardList';
import { useSelector } from 'react-redux';
import { getGeneticResearch } from '../../store/geneticResearch';

const GeneticResearchList = () => {
  const geneticResearch = useSelector(getGeneticResearch());

  return (
    <>
      <div className=''>
        <h1 className={h1}>{name}</h1>
        <p className={p}>{description}</p>
        <p className={p_Price}>{price}</p>
        <p className={ul}>Состав:</p>
        <ul>
          {composition.map((el, i) => <li className={li} key={i}>{el}</li>)}
        </ul>
      </div>
    </>
  );
};

export default GeneticResearchList;