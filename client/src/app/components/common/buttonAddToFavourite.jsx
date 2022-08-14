import React from 'react';
import {
  addToFavourite, getCurrentUserData,
  getCurrentUserId,
  getUserById,
} from '../../store/users';
import { useDispatch, useSelector } from 'react-redux';

const ButtonAddToFavourite = ({id}) => {
  const userId = useSelector(getCurrentUserId());
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserData(userId));
  
  const handleClicker = () => {
    if (currentUser) {
      const favourites = [...currentUser.favourites];
      favourites.push(id);
      const updatedUser = {...currentUser, favourites: favourites};
      dispatch(addToFavourite(updatedUser));
    }
  };
  
  return (
    <button className=' mt-1 className="inline-flex items-center px-4 py-2 border border-amber-500 rounded-[10px] shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-500"'
      onClick={() => handleClicker()}>Добавить в избранное</button>
  );
};

export default ButtonAddToFavourite;