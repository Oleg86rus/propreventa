import React from 'react';
import Card from './card';

const CardList = ({ products }) => {
  if (products) return (
    <div className="">
      <div className="max-w-[1000px] max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-3xl lg:px-8">
        <div className="grid justify-center sm:grid-cols-2 md:grid-cols-2 gap-12 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map(product => <Card key={`${product.id} + ${product.name}`} product={product}/>)}
        </div>
      </div>
    </div>
  );
  return 'Loading';
};

export default CardList;