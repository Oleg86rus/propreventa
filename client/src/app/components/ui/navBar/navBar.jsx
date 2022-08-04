import React from 'react';
import { NavLink } from 'react-router-dom';
import { navList } from '../../../utils/constants';

const Navbar = () => {
  return (
    <nav className="">
      <div className="">
        <ul className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
          <li className="">
            <NavLink exact className="mr-2" to="/">Главная</NavLink>
          </li>
          {navList.map(el => <li key={el.id} className="">
            <NavLink exact className="mr-2" to={el.href}>{el.name}</NavLink>
          </li>)}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;