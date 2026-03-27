import React from 'react'
import { useParams } from 'react-router-dom';

const ProductById = () => {
  const products = [
  { id: "1", name: "iPhone" },
  { id: "2", name: "Laptop" },
];

const ProductById = () => {
  const { productId } = useParamsams();

  const product = products.find(p => p.id === productId);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>ID: {product.id}</p>
    </div>
  );
};

}

export default ProductById
