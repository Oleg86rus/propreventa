import React from 'react';
import Navbar from '../../components/ui/navBar/navBar';
import AnalyzesDescription from '../../components/common/analyzesDescription';

const AnalyzesList = () => {
  return (
    <div className='min-h-[800px]'>
      <Navbar/>
      <div className='flex flex-col items-center'>
        <AnalyzesDescription/>
      </div>
    </div>
  );
};

export default AnalyzesList;