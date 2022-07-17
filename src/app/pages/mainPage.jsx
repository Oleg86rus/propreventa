import React from 'react';
import NavBarMainPage from '../components/ui/navBar/navBarMainPage';
import sliderOnMainPage from '../components/ui/slider/sliderOnMainPage';

const MainPage = () => {
  return (
    <div className='container'>
      <NavBarMainPage/>
      <sliderOnMainPage/>
    </div>
  );
};

export default MainPage;