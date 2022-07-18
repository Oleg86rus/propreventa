import React from 'react';
import { company } from '../../../utils/constants';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex justify-between items-center h-[374px]">
      <div>
        <p>{company.name.toUpperCase()}</p>
      </div>
      <div className="flex justify-between w-[270px] h-[158px] items-center flex-col flex-wrap">
        <div>
        
        </div>
        <NavLink to='/' >Главная</NavLink>
        <NavLink to='/' >О клинике</NavLink>
        <NavLink to='/' >Услуги</NavLink>
        <NavLink to='/' >Анализы</NavLink>
        <NavLink to='/' >Чек-апы</NavLink>
        <NavLink to='/' >Врачи</NavLink>
        <NavLink to='/' >Капельницы</NavLink>
        <a href="client/src/app/components/ui/footer/footer">Запись онлайн</a>
        <NavLink to='/' >Контакты</NavLink>
      </div>
      <div>
        <img srcSet="../../../assets/arrowFooter.png" alt="arrow"/>
      </div>
      <div>
        <button className='py-2 px-4 mr-2 rounded hover:shadow-md transition-all border-2 bg-none decoration-white'>Заказать звонок</button>
      </div>
    </div>
  );
};

export default Footer;