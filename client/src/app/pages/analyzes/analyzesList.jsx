import React from 'react';
import Navbar from '../../components/ui/navBar/navBar';
import AnalyzesDescription from '../../components/common/analyzesDescription';

const AnalyzesList = () => {
  return (
    <>
      <Navbar/>
      <div className='flex flex-col items-center'>
        <AnalyzesDescription/>
      </div>
    </>
  );
};

export default AnalyzesList;