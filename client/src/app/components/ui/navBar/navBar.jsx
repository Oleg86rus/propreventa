import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="">
      <div className="">
        <ul className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
          <li className="">
            <NavLink exact className="mr-2" to="/">Главная</NavLink>
          </li>
          <li className="">
            <NavLink exact className="mr-2" to="/checkups">Чек-апы</NavLink>
          </li>
          <li className="">
            <NavLink exact className="mr-2" to="/iv_therapy">IV-терапия</NavLink>
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
  );
};
export default Navbar;