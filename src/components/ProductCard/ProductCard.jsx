import React from 'react';
import {useNavigate} from 'react-router-dom';
import './ProductCard.css';


const ProductCard = ({product}) => {
    return (
        <div className='productInfoDesign'>
            <h3>{product.title}</h3>
            <div className='productImg'><img src={``} alt={product.title} with='375' height='560'/></div>
            <div className='PriceAndDescription'>
                <div>Price: {product.price}</div>
            </div>
            <div className='Description'>{product.description}</div>
        </div>
    )

}

export default ProductCard;