import React from 'react';

const ProductList = ({ productData }) => {
  return (
    <div className="ProductList">
      {productData.map((product, index) => (
        <div key={index} className="ProductCard">
          <img src={product.imagePath} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;