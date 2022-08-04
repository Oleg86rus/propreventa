import React from 'react';
import logo from '../../../assets/logo.png';
import { company } from '../../../utils/constants';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-wrap justify-between items-center m-5 h-[60px]'>
      <NavLink to='/'><img src={logo} alt="logo" className='max-w-[284px] max-h-[44px]'/></NavLink>
      <div className='flex flex-col items-center max-w-[208px] max-h-[60px]'>
        <p className='font-400 line-height-140 font-bold tracking-wider text-base letter-spacing-[0.05em]'>{company.phone}</p>
        <p className='font-400'>{company.email}</p>
      </div>
    </div>
  );
};

export default Header;