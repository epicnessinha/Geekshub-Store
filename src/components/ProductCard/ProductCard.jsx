import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useProductChangeContext } from '../../providers/ProductProvider';
import './ProductCard.css';


const ProductCard = ({value}) => {

    const navigate = useNavigate();

    const productChange = useProductChangeContext();

    const goDetail = () => {

        productChange(value);

        setTimeout(() => {
            navigate('/details')
        },200);
    }

    return (
        <div className='productInfoDesign' onClick={() => goDetail()}>
            <h4>{value.title}</h4>
            <img className="img-thumbnail" src={value.images} alt={value.title} width='120' height='120'/>
            <div className='priceAndDescription'>
                <div>Price: {value.price}€</div>
            </div>
        
        </div>
    )

}

export default ProductCard;