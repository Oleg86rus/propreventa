import React from 'react';
import Card from './card';
import Loader from '../loader';

const CardList = ({ products }) => {
  if (products) return (
    <div className="">
      <div className="mx-auto mx-auto py-16 px-2 sm:py-10 sm:px-6 lg:max-w-[1100px] lg:px-8">
        <div className="mx-auto grid justify-center sm:grid-cols-2 md:grid-cols-2 gap-12 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product, i) => <Card key={i} product={product}/>)}
        </div>
      </div>
    </div>
  );
  return <Loader/>;
};

export default CardList;