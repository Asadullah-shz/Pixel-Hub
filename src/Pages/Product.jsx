import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router';
import Breadcrump from '../Components/Breadcrump/Breadcrump';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product?.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found or still loading...</div>;
  }

  return (
    <div>
      <Breadcrump product={product} />
      <ProductDisplay product={product}/>
    </div>
  );
};

export default Product;