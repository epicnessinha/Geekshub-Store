import React from "react";
import { useProductContext } from "../../providers/ProductProvider";
import "./ProductDetails.css";

const ProductDetails = () => {
  const product = useProductContext();

  return (
    <div className="productDetailDesign">
      <div className="title">
        <h1>{product.title}</h1>
      </div>
      <div>
        <img className="image" src={product.images} width="380" height="320" />
      </div>
      <div className="price">
        <div>Price: {product.price} €</div>
        <div className="description">
          <div>{product.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
