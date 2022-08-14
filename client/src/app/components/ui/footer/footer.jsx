import React from 'react';
import { company } from '../../../utils/constants';
import { Link, NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-footerBG text-white w-full flex items-center'>
      <div className="container mx-auto flex justify-between items-center h-[374px]">
        <div>
          <Link to='/'>{company.name.toUpperCase()}</Link>
          <a href=""></a>
        </div>
        <div className="grid grid-cols-2 justify-between w-[300px] h-[200px] items-center flex-col flex-wrap">
          <NavLink to='/' >Главная</NavLink>
          <NavLink to='/aboutUs' >О клинике</NavLink>
          <NavLink to='/analyzes' >Анализы</NavLink>
          <NavLink to='/checkups' >Чек-апы</NavLink>
          <NavLink to='/doctors' >Врачи</NavLink>
          <NavLink to='/IVTherapy' >IV-терапия</NavLink>
        </div>
        <div className='min-w-[50px] flex justify-between'>
          <NavLink target='_blank' to={{pathname: 'https://www.instagram.com/propreventa/'}}><i className="fa fa-instagram" aria-hidden="true"></i></NavLink>
          <NavLink target='_blank' to={{pathname: 'https://www.instagram.com/dnkom_surgut/'}}><i className="fa fa-instagram" aria-hidden="true"></i></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;