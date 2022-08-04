import React from 'react';
import { company } from '../../../utils/constants';
import './navbarMainpage.css';
import { NavLink } from 'react-router-dom';
import { navList } from '../../../utils/constants';

const navLinkStyle = 'm-auto ml-0 text-center w-[150px]';
const NavbarMainPage = () => {
  return (
    <div className='flex flex-wrap justify-center justify-items-stretch max-w-[1150px] container'>
      <div className='flex items-center relative w-[343px] mr-20'>
        <p className='absolute top-0'>{company.date}</p>
        <h1 className='text-center align-middle h-inherit font-extralight text-4xl tracking-wider text-right'>{company.description.toUpperCase()}</h1>
      </div>
      <div className='grid grid-cols-3 gap-8 items-center p-2.5 max-w-[768px]'>
        {navList.map(el => <div className='max-w-[220px] group text-center hover:drop-shadow-amber transition-all duration-500' key={el.id}>
          <span className='navbarMainPage bg-mainMenu flex items-center border border-amber-600'>
            <NavLink exact className={navLinkStyle} to={el.href}>{el.name}</NavLink>
          </span>
        </div>)}
      </div>
    </div>
  );
};

export default NavbarMainPage;