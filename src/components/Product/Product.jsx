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
    <div className="productGridDesign">
        {products.map(product => (
            <div key={product.id}>
            <ProductCard value={product}/>
            </div>
        ))}
    </div>
  )
}

export default Product;
