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
      <div className='flex justify-between items-center w-[805px]'>
        <div >
          <span className='navbarMainPage flex items-center'>
            <NavLink exact className="mr-2" to="/checkups">Чек-апы</NavLink>
          </span>
        </div>
        <div className='navbarMainPage'>
          <NavLink exact className="mr-2" to="/analyzes">Анализы</NavLink>
        </div>
        <div className='navbarMainPage'>
          <NavLink exact className="mr-2" to="/genetic_research">Генетические исследования</NavLink>
        </div>
        <div className='navbarMainPage'>
          <NavLink exact className="mr-2" to="/iv_therapy">IV-терапия</NavLink>
        </div>
        <div className='navbarMainPage'>
          <NavLink exact className="mr-2" to="/doctors">Врачи</NavLink>
        </div>
        <div className='navbarMainPage'>
          <NavLink exact className="" to="/about_us">О нас</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavbarMainPage;