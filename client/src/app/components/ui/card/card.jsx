import React from 'react';
import ItemWithImage from '../../common/card/itemWithImage';
import ItemWithoutImage from '../../common/card/itemWithoutImage';


const Card = ({
  product
}) => {
  return ( <> { product.imageSrc ? <ItemWithImage product={product}/> : <ItemWithoutImage product={product}/> } </> );
};

export default Card;