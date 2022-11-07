import React from 'react';
import NavBarMainPage from '../components/ui/navBar/navBarMainPage';
import Slider from '../components/ui/mainPage/specialOffer/specialOffer';
import NavBar from '../components/ui/navBar/navBar';

const MainPage = () => {
  return (
    <div className='container flex flex-col mx-auto max-w-[1150px]'>
      <NavBar/>
      <Slider/>
      <NavBarMainPage/>
    </div>
  );
};

export default MainPage;