import React from 'react';
import NavBarMainPage from '../components/ui/navBar/navBarMainPage';
import SliderOnMainPage from '../components/ui/slider/sliderOnMainPage';

const MainPage = () => {
  return (
    <div className='container'>
      <NavBarMainPage/>
      <SliderOnMainPage/>
    </div>
  );
};

export default MainPage;