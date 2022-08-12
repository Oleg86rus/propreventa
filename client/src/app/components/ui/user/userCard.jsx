import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { style } from '../../../utils/constants';


const UserCard = ({ user }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(history.location.pathname + '/edit');
  };
  const {h2, p} = style;
  return (
    <div className="flex flex-col justify-between items-center min-h-[460px] min-w-[350px] max-w-sm bg-white rounded-lg border border-amber-400 shadow-md drop-shadow-xl">
      <button
        className="absolute top-3 right-3"
        onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="mt-5 mb-5 text-center w-full flex flex-col min-h-[300px] justify-between items-center">
        <h2 className={`${h2}`}>Имя:</h2>
        <p className='mb-5 bg-amber-300 w-full p-2'>{user.name}</p>
        <h2  className={`${h2}`}>E-mail:</h2>
        <p className='mb-5 bg-amber-300 w-full p-2'>{user.email}</p>
        <h2  className={`${h2}`}>Пол:</h2>
        <p className='mb-5 bg-amber-300 w-full p-2'>{user.sex}</p>
      </div>
    </div>
  );
};
UserCard.propTypes = {
  user: PropTypes.object
};
export default UserCard;