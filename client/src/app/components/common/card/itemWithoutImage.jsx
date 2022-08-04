import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';

const ItemWithoutImage = ({product}) => {
  const { location } = useHistory();
  const formClassName = 'flex flex-col justify-between items-center p-6 min-h-[310px] max-w-sm bg-white rounded-lg border border-amber-200 shadow-md hover:drop-shadow-xl transition-all duration-500';
  const h3ClassName = 'mt-4 text-sm font-bold text-gray-700';
  const pClassName = 'mt-2 text-base  font-light text-gray-900';
  const priceClassName = 'mt-3 mb-2 text-lg  font-medium text-gray-900';
  const btnClassName = 'inline-flex items-center px-4 py-2 border border-amber-500 rounded-[10px] shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-500';
  
  return (
    <div className="group text-center">
      <div className={formClassName}>
        <div>
          <h3 className={h3ClassName}>{product.name}</h3>
          <p className={pClassName}>{product.description}</p>
        </div>
        <div>
          <p className={priceClassName}>{product.price} р.</p>
          <NavLink
            type="button"
            className={btnClassName}
            to={`${location.pathname}/${product._id}`}
          >
            Подробнее
          </NavLink>
        </div>
      </div>
    </div>
  );
};
ItemWithoutImage.propTypes = {
  product: PropTypes.object
};
export default ItemWithoutImage;