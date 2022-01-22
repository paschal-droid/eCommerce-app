import React, {memo, lazy} from "react";
import { Link } from "react-router-dom";
import Pending from '../Pending'

import "./products.css";
const Product = lazy(()=> import('./Product'))

const Products = ({cart,products, onAddToCart}) => {
  const filters = ["All Products", "T-shirts", "Hoodies", "Jeans", "Shoes"];
  return (
    <div className="products section-padding">
      <div className="products_header">
        <h3 className="products_header-title">Our products</h3>
        <div className="products_header-filters">
          {filters.map((item, i) => (
            <Link to={`#${item}`} key={item + i}>
              <p>{item}</p>
            </Link>
          ))}
        </div>
      </div>
      {!products.length ? 
        <Pending error='Please wait ...' />
      : <div className="products_card">
        {products.map((product, i) => (
          <Product key={product.id + i} product={product} onAddToCart={onAddToCart} />
        ))}
      </div> }
  </div>
  );
};

export default memo(Products);
