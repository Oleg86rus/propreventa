import React from 'react';
import { NavLink } from 'react-router-dom';
import { company } from '../../../utils/constants';

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between items-center h-[50px] px-5 mt-5 mb-5'>
        <img src="../../../assets/logo.jpg" alt="logo"/>
        <div className='flex flex-col items-center w-[172px] h-[60px]'>
          <p className='font-400 line-height-140 font-bold tracking-wider text-base letter-spacing-[0.05em]'>{company.phone}</p>
          <p className='font-400'>{company.email}</p>
        </div>
      </div>
      <nav className="">
        <div className="">
          <ul className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
            <li className="">
              <NavLink exact className="mr-2" to="/">Главная</NavLink>
            </li>
            <li className="">
              <NavLink exact className="mr-2" to="/users">IV-терапия</NavLink>
            </li>
            <li className="">
              <NavLink exact className="mr-2" to="/analyzes">Анализы</NavLink>
            </li>
            <li className="">
              <NavLink exact className="mr-2" to="/doctors">Врачи</NavLink>
            </li>
            <li className="">
              <NavLink exact className="mr-2" to="/genetic_research">Генетические исследования</NavLink>
            </li>
            <li className="">
              <NavLink exact className="" to="/about_us">О нас</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;