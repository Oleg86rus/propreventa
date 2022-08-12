import React from 'react';
import NavBarMainPage from '../components/ui/navBar/navBarMainPage';
import Slider from '../components/ui/slider/sliderOnMainPage';


const MainPage = () => {
  return (
    <div className='container flex flex-col mx-auto max-w-[1150px]'>
      <NavBarMainPage/>
      <Slider/>
    </div>
  );
};

export default MainPage;