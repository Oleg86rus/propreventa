import React from 'react';
import ItemWithImage from './itemWithImage';
import ItemWithoutImage from './itemWithoutImage';

const Card = ({
  product
}) => {
  
  return ( <> { product.imageSrc ? <ItemWithImage product={product}/> : <ItemWithoutImage product={product}/> } </> );
};

export default Card;