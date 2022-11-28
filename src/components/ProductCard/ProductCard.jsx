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
            <h3>{value.title}</h3>
            <div className='productImg'><img src={``} alt={value.title} with='375' height='560'/></div>
            <div className='priceAndDescription'>
                <div>Price: {value.price}€</div>
            </div>
            <div className='description'>{value.description}</div>
        </div>
    )

}

export default ProductCard;