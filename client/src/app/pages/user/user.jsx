import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getCurrentUserId } from '../../store/users';
import { useSelector } from 'react-redux';
import EditUserPage from './editUserPage';
import UserPage from './userPage';
import NavBar from '../../components/ui/navBar/navBar';

const User = () => {
  const params = useParams();
  const { userId, edit } = params;
  const currentUserId = useSelector(getCurrentUserId());
  // : (<Redirect to={`/users/${currentUserId}/edit`}/>))
  
  return (
    <>
      <NavBar/>
      <div className='mx-auto flex items-center'>
        {userId === 'edit'
          ? <EditUserPage/>
          : <UserPage userId={currentUserId}/>}
      </div>
    </>

  );
};

export default User;