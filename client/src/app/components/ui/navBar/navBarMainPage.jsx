import React from 'react';
import { company } from '../../../utils/constants';
import './navbarMainpage.css';
import { NavLink } from 'react-router-dom';

const navLinkStyle = 'm-auto ml-0 text-center w-[150px]';
const NavbarMainPage = () => {
  return (
    <div className='flex justify-between h-[530px] w-[1150px] container'>
      <div className='relative w-[343px]'>
        <p>{company.date}</p>
        <h1 className='absolute top-[150px] font-extralight text-4xl tracking-wider text-right'>{company.description.toUpperCase()}</h1>
      </div>
      <div className='flex flex-wrap justify-between items-center w-[805px]'>
        <div >
          <span className='navbarMainPage flex items-center'>
            <NavLink exact className={navLinkStyle} to="/checkups">Чек-апы</NavLink>
          </span>
        </div>
        <div>
          <span className='navbarMainPage flex items-center'>
            <NavLink exact className={navLinkStyle} to="/analyzes">Анализы</NavLink>
          </span>
        </div>
        <div>
          <span className='navbarMainPage flex items-center'>
            <NavLink exact className={navLinkStyle} to="/genetic_research">Генетические исследования</NavLink>
          </span>
        </div>
        <div>
          <span className='navbarMainPage flex items-center'>
            <NavLink exact className={navLinkStyle} to="/iv_therapy">IV-терапия</NavLink>
          </span>
        </div>
        <div>
          <span className='navbarMainPage flex items-center'>
            <NavLink exact className={navLinkStyle} to="/doctors">Врачи</NavLink>
          </span>
        </div>
        <div>
          <span className='navbarMainPage flex items-center'>
            <NavLink exact className={navLinkStyle} to="/about_us">О нас</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarMainPage;