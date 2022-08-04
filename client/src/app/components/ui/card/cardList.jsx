import React from 'react';
import Card from './card';

const CardList = ({ products }) => {
  if (products) return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map(product => <Card key={`${product.id} + ${product.name}`} product={product}/>)}
        </div>
      </div>
    </div>
  );
  return 'Loading';
};

export default CardList;