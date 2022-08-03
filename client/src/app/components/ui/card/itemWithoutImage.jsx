import React from 'react';
import PropTypes from 'prop-types';

const ItemWithoutImage = ({product}) => {

  return (
    <a href={product.href} className="group text-center">
      <div className='flex flex-col justify-between items-center p-6 min-h-[284px] max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:drop-shadow-xl transition-all duration-500'>
        <div>
          <h3 className="mt-4 text-sm font-bold text-gray-700">{product.name}</h3>
          <p className="mt-2 text-base  font-light text-gray-900">{product.description}</p>
        </div>
        <div>
          <p className="mt-3 mb-2 text-lg  font-medium text-gray-900">{product.price} р.</p>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-amber-500 rounded-[10px] shadow-sm text-sm font-medium text-black hover:bg-amber-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-500"
          >
            Подробнее
          </button>
        </div>
      </div>
    </a>
  );
};
ItemWithoutImage.propTypes = {
  product: PropTypes.object
};
export default ItemWithoutImage;