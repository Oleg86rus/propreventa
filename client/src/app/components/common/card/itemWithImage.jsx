import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import {
  addToFavourite,
  getCurrentUserId,
  getUserById,
} from '../../../store/users';
import { useDispatch, useSelector } from 'react-redux';

const ItemWithImage = ({product}) => {
  const {location} = useHistory();
  const {_id, imageSrc, imageAlt, name, price, skills, description} = product;
  const dispatch = useDispatch();
  const userId = useSelector(getCurrentUserId());
  const currentUser = useSelector(getUserById(userId));
  const handleClicker = () => {
    const prodId = product._id;
    const favourites = [...currentUser.favourites];
    favourites.push(prodId);
    const updatedUser = {...currentUser, favourites: favourites};
    dispatch(addToFavourite(updatedUser));
  };
  
  return (
    <div className="group text-center min-h-[650px] min-w-[300px]">
      <div className='flex flex-col justify-between items-center p-4 h-full max-w-sm bg-white rounded-lg border border-amber-400 shadow-md hover:drop-shadow-xl hover:animate-card-up animate-card-down duration-300'>
        <div
          className="w-full h-[300px] aspect-w-1 aspect-h-1 bg-gray-200 rounded-[10px] overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div>
          <h3 className="mt-4 mb-2 font-bold text-lg text-gray-700">{name}</h3>
          {price && <p className="mt-2 font-bold text-lg font-medium text-gray-900">{price} р.</p>}
          {description && <p className="mt-2 mb-2 w-full text-sm text-gray-900">{description}</p>}
          
        </div>
        <NavLink
          type="button"
          className="inline-flex items-center px-4 py-2 border border-amber-500 rounded-[10px] shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-500"
          to={`${location.pathname}/${_id}`}
        >
          Подробнее
        </NavLink>
        <button className=' mt-1 className="inline-flex items-center px-4 py-2 border border-amber-500 rounded-[10px] shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-500"' onClick={() => handleClicker()}>Добавить в избранное</button>

      </div>
      
    </div>
  );
};
ItemWithImage.propTypes = {
  product: PropTypes.object
};
export default ItemWithImage;