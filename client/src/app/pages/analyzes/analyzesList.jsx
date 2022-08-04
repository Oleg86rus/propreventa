import React from 'react';
import Navbar from '../../components/ui/navBar/navBar';
import AnalyzesDescription from '../../components/common/analyzesDescription';


const AnalyzesList = () => {
  return (
    <>
      <div>
        <Navbar/>
        <AnalyzesDescription/>
      </div>
    </>
  );
};

export default AnalyzesList;