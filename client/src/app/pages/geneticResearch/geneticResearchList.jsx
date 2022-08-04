import React from 'react';
import Navbar from '../../components/ui/navBar/navBar';
import CardList from '../../components/ui/card/cardList';
import { useSelector } from 'react-redux';
import { getGeneticResearch } from '../../store/geneticResearch';

const GeneticResearchList = () => {
  const geneticResearch = useSelector(getGeneticResearch());
  
  return (
    <>
      <Navbar/>
      <CardList products={geneticResearch}/>
    </>
  );
};

export default GeneticResearchList;