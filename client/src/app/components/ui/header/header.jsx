import React from 'react';
import logo from '../../../assets/logo.png';
import { company } from '../../../utils/constants';

const Header = () => {
  return (
    <div className='flex justify-between items-center m-5 h-[60px]'>
      <img src={logo} alt="logo" className='w-[284px] h-[44px]'/>
      <div className='flex flex-col items-center w-[172px] h-[60px]'>
        <p className='font-400 line-height-140 font-bold tracking-wider text-base letter-spacing-[0.05em]'>{company.phone}</p>
        <p className='font-400'>{company.email}</p>
      </div>
    </div>
  );
};

export default Header;