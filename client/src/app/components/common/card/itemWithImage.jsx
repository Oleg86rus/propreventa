import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import ButtonAddToFavourite from '../buttonAddToFavourite';
import { useSelector } from 'react-redux';
import { getCurrentUserId, getIsLoggedIn } from '../../../store/users';
import { getDoctors } from '../../../store/doctors';
import { getCheckups } from '../../../store/checkups';
import { getIVTherapyes } from '../../../store/IVTherapyes';
import { getUltrasounds } from '../../../store/ultrasounds';
import { getGeneticResearch } from '../../../store/geneticResearch';
import Loader from '../../ui/loader';

const ItemWithImage = ({product}) => {
  const isAuth = useSelector(getIsLoggedIn());
  const userId = useSelector(getCurrentUserId());
  const {location} = useHistory();
  const {_id, imageSrc, imageAlt, name, price, skills, description} = product;
  
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
        {isAuth && userId && <ButtonAddToFavourite id={_id}/>}
      </div>
    </div>
  );
};
ItemWithImage.propTypes = {
  product: PropTypes.object
};
export default ItemWithImage;