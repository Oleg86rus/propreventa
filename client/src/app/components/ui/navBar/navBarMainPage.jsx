import React from 'react';
import { company } from '../../../utils/constants';
import './navbarMainpage.css';
import { NavLink } from 'react-router-dom';

const NavbarMainPage = () => {
  return (
    <div className='flex justify-between h-[530px] w-[1150px]'>
      <div className='flex justify-between flex-col relative w-[343px]'>
        <p>{company.date}</p>
        <h1 className='absolute top-[150px] font-extralight text-4xl tracking-wider text-right'>{company.description.toUpperCase()}</h1>
      </div>
      <div className='flex flex-wrap justify-between items-center w-[805px]'>
        <div >
          <span className='navbarMainPage flex items-center'>
            <NavLink exact className="mr-2 ml-[63px]" to="/checkups">Чек-апы</NavLink>
          </span>
        </div>
        <div className='navbarMainPage'>
          <span className='navbarMainPage flex items-center'>
            <NavLink exact className="mr-2 ml-[65px]" to="/analyzes">Анализы</NavLink>
          </span>
        </div>
        <div className='navbarMainPage'>
          <span className='navbarMainPage flex items-center'>
            <NavLink exact className="mr-2 ml-[45px] w-[120px]" to="/genetic_research">Генетические исследования</NavLink>
          </span>
        </div>
        <div className='navbarMainPage'>
          <span className='navbarMainPage flex items-center'>
            <NavLink exact className="mr-2 ml-[57px]" to="/iv_therapy">IV-терапия</NavLink>
          </span>
        </div>
        <div className='navbarMainPage'>
          <span className='navbarMainPage flex items-center'>
            <NavLink exact className="mr-2 ml-[73px]" to="/doctors">Врачи</NavLink>
          </span>
        </div>
        <div className='navbarMainPage'>
          <span className='navbarMainPage flex items-center'>
            <NavLink exact className="ml-[73px]" to="/about_us">О нас</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarMainPage;