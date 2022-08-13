import React from 'react';
import { Menu } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUserId, getUserById } from '../../../store/users';

const NavProfileMenu = () => {
  const userId = useSelector(getCurrentUserId());
  const user  = useSelector(getUserById(userId));
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  const auth = Object.keys(user).findIndex((el) => el === 'admin');
  return (
    <>
      <Menu.Item>
        {({ active }) => (
          <button
            type="submit"
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block w-full text-left px-4 py-2 text-sm'
            )}
          >
            <NavLink to='/user' className='inline-block w-full'>Профиль</NavLink>
          </button>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <button
            type="submit"
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block w-full text-left px-4 py-2 text-sm'
            )}
          >
            <NavLink to='/favourites' className='inline-block w-full'>Избранное</NavLink>
          </button>
        )}
      </Menu.Item>
      {auth > 0 ? <Menu.Item>
        {({ active }) => (
          <button
            type="submit"
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block w-full text-left px-4 py-2 text-sm'
            )}
          >
            <NavLink to='/createCard' className='inline-block w-full'>Создать продукт</NavLink>
          </button>
        )}
      </Menu.Item> : null}
      <Menu.Item>
        {({ active }) => (
          <button
            type="submit"
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block w-full text-left px-4 py-2 text-sm'
            )}
          >
            <NavLink to='/logout' className='inline-block w-full'>Выйти</NavLink>
          </button>
        )}
      </Menu.Item>
    </>
  );
};
export default NavProfileMenu;