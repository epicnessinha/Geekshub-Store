import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import './Product.css'
import ProductCard from '../ProductCard/ProductCard';


const Product = ({products, loading}) => {

    

    if(loading){
        return <h2>Loading products...</h2>
    }
  return (
    <ul className="list-group mb-4">
        {products.map(product => (
            <div key={product.id}>
            <ProductCard value={product}/>
            </div>
        ))}
    </ul>
  )
}

export default Product;
