import React from 'react';
import { company } from '../../../utils/constants';
import { Link, NavLink } from 'react-router-dom';
import arrow from '../../../assets/arrowFooter.png';

const Footer = () => {
  return (
    <div className='bg-footerBG text-white w-full flex items-center'>
      <div className="container mx-auto flex justify-between items-center h-[374px]">
        <div>
          <Link to='/'>{company.name.toUpperCase()}</Link>
          <a href=""></a>
        </div>
        <div className="flex justify-between w-[270px] h-[158px] items-center flex-col flex-wrap">
          <NavLink to='/' >Главная</NavLink>
          <NavLink to='/' >О клинике</NavLink>
          <NavLink to='/' >Услуги</NavLink>
          <NavLink to='/analyzes' >Анализы</NavLink>
          <NavLink to='/checkups' >Чек-апы</NavLink>
          <NavLink to='/doctors' >Врачи</NavLink>
          <NavLink to='/iv_therapy' >IV-терапия</NavLink>
          <a href="#">Запись онлайн</a>
          <NavLink to='/contacts' >Контакты</NavLink>
        </div>
        <div>
          <img src={arrow} alt="arrow"/>
        </div>
        <div>
          <button className='py-2 px-4 mr-2 rounded hover:shadow-md transition-all border-2 bg-none decoration-white'>Заказать звонок</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;