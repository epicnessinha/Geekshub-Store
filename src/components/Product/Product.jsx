import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css'


export const Product = ({products, loading}) => {

    if(loading){
        return <h2>Loading products...</h2>
    }
  return (
    <ul className="list-group mb-4">
        {products.map(product => (
            <li key={product.id} className="productsDesign">
                {product.title}
            </li>
        ))}
    </ul>
  )
}

export default Product;
