import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../../store/users';
import { NavLink } from 'react-router-dom';
import NavProfileMenu from './navProfileMenu';



export default function Example() {
  const isLoggedIn = useSelector(getIsLoggedIn());
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  return (
    <Menu as="div" className="relative inline-block text-left w-full h-full mr-4">
      <div>
        <Menu.Button className="inline-flex justify-center w-full h-full rounded-md border border-amber-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-100 focus:ring-amber-500">
          Личный кабинет
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
          <div className="py-1">
            {isLoggedIn
              ? <NavProfileMenu/>
              : <>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      to='/profile'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm'
                      )}
                    >
                      <NavLink to='/login' className='inline-block w-full'>Авторизоваться</NavLink>
                    </button>
                  )}
                </Menu.Item>
              </>}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}