import React from 'react';
import NavBarMainPage from '../components/ui/navBar/navBarMainPage';
import SliderOnMainPage from '../components/ui/slider/sliderOnMainPage';

const MainPage = () => {
  return (
    <div className='container flex flex-col mx-auto max-w-[1150px]'>
      <NavBarMainPage/>
      <SliderOnMainPage/>
    </div>
  );
};

export default MainPage;