import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ItemWithImage = ({product}) => {
  const {_id, href, imageSrc, imageAlt, name, price, skills} = product;
  return (
    <div className="group text-center">
      <div className='flex flex-col justify-between items-center p-6 h-[460px] min-w-[230px] max-w-sm bg-white rounded-lg border border-amber-400 shadow-md hover:drop-shadow-xl hover:scale-105 transition-all duration-500'>
        <div
          className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-[10px] overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div>
          <h3 className="mt-4 mb-2 text-lg text-gray-700">{name}</h3>
          {price && <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>}
          <NavLink
            type="button"
            className="inline-flex items-center px-4 py-2 border border-amber-500 rounded-[10px] shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-500"
            to={`${location.pathname}/${_id}`}
          >
           Подробнее
          </NavLink>
        </div>
      </div>
    </div>
  );
};
ItemWithImage.propTypes = {
  product: PropTypes.object
};
export default ItemWithImage;