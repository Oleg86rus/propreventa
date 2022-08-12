import React from 'react';
import { NavLink } from 'react-router-dom';
import { navList } from '../../../utils/constants';
import Breadcrumbs from '../../common/breadcrumbs';

const Navbar = () => {
  return (
    <div className='relative'>
      <nav className="">
        <div className="">
          <ul className="flex justify-between items-center h-[50px] px-5 shadow-md text-amber-800">
            <li className="hover:-translate-y-1 transition-all duration-300">
              <NavLink exact className="mr-2" to="/">Главная</NavLink>
            </li>
            {navList.map(el => <li key={el.id} className="hover:-translate-y-1 transition-all duration-300">
              <NavLink exact className="mr-2" to={el.href}>{el.name}</NavLink>
            </li>)}
          </ul>
        </div>
      </nav>
      <Breadcrumbs/>
    </div>
  );
};
export default Navbar;