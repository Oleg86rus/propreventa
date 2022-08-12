import React from 'react';
import Navbar from '../../components/ui/navBar/navBar';
import CardList from '../../components/ui/card/cardList';
import { useSelector } from 'react-redux';
import { getGeneticResearch } from '../../store/geneticResearch';
import IVTherapy from '../IVTherapyes/IVTherapy';
import { useHistory } from 'react-router-dom';
import GeneticResearchDescription
  from '../../components/common/geneticResearchDescription';

const GeneticResearchList = () => {
  const geneticResearch = useSelector(getGeneticResearch());
  const {location} = useHistory();
  const {pathname} = location;
  const pathNames = pathname.split('/').filter((el) => el);
  return (
    <>
      <Navbar/>
      {pathNames[1] ? <IVTherapy/>
        : <div className='flex flex-col items-center'>
          <GeneticResearchDescription/>
          <CardList products={geneticResearch}/>
        </div>
      }
    </>
  );
};

export default GeneticResearchList;