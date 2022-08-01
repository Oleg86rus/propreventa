import React from 'react';

const Card = ({
  id,
  href,
  imageSrc,
  imageAlt,
  name,
  price
}) => {
  return (
    <a key={id} href={href} className="group text-center">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg  font-medium text-gray-900">{price}</p>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-700 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Подробнее
      </button>
    </a>
  );
};

export default Card;

