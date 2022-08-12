import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import UserCard from '../../components/ui/user/userCard';
import { getUserById } from '../../store/users';
import Loader from '../../components/ui/loader';

const UserPage = ({ userId }) => {
  const user = useSelector(getUserById(userId));
  return (
    <div className='relative mx-auto flex items-center mt-10 mb-10 min-h-[500px]'>
      {user ?  <UserCard user={user} /> : <Loader/>}
    </div>
  );
};
UserPage.propTypes = {
  userId: PropTypes.string
};

export default UserPage;