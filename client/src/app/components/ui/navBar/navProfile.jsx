import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUserData } from '../../../store/users';

const NavProfile = () => {
  const currentUser = useSelector(getCurrentUserData());
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {setOpen(prevState=>!prevState);};
  return (
    <div className="dropdown" onClick={toggleMenu}>
      <div className="btn dropdown-toggle d-flex align-items-center">
        <div className="me-2">
          name
        </div>
        <img
          src=''
          alt=""
          height='40'
          className="img-responsive rounded-circle"/>
      </div>
      <div className={'w-100 dropdown-menu' + (isOpen ? ' show' : '')}>
        <Link to={'/'} className='dropdown-item'>Profile</Link>
        <Link to='/logout' className='dropdown-item'>Log out</Link>
      </div>
    </div>
  );
};

export default NavProfile;