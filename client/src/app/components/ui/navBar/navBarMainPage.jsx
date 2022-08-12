import React from 'react';
import { company } from '../../../utils/constants';
import './navbarMainpage.css';
import { NavLink } from 'react-router-dom';
import { navList } from '../../../utils/constants';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../../store/users';

const NavbarMainPage = () => {
  const navLinkStyle = 'flex items-center justify-center h-full text-center';
  const isLoggedIn = useSelector(getIsLoggedIn());
  return (
    <div className='container flex lg:flex-wrap sm:flex-wrap md:flex-wrap m-auto justify-center gap-4 mt-10'>
      <div className='flex items-center relative w-[343px]'>
        <p className='absolute top-0'>{company.date}</p>
        <h1 className='align-middle h-inherit font-extralight text-3xl tracking-wider text-right'>{company.description.toUpperCase()}</h1>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-3 items-center p-2.5'>
        {navList.map(el => <div className='hover:drop-shadow-amber hover:animate-card-up animate-card-down' key={el.id}>
          <div className='navbarMainPage bg-mainMenu flex items-center justify-center'>
            <NavLink className={navLinkStyle} to={el.href}>
              <p className='text-white'>{el.name}</p>
            </NavLink>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default NavbarMainPage;