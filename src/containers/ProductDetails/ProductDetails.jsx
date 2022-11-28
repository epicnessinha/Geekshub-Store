import React, { useProductContext } from 'react';
import Product from '../../components/Product/Product';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductDetails.css';





const ProductDetails = () => {
    const product = useProductContext();

    return (
        <div className='productDetailDesign'>
            <h1>Product Details</h1>
            {product.id !== undefined &&
            <div>{product.title}</div>
}
        </div>
    )
}

export default ProductDetails;






/* const ProductDetails = ({product}) => {

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
} */

/*useEffect(()=>{
    const fecthData = async () => {
        let response = await bringDetails(searchInput);
        let results = response.data.results
        setDetails(results)
    }
    fecthData()
},[searchInput])

const ProductDetails = (product) => {
    setSelected(product);
};

if (product.length > 0) {
    return (
        <div className='productDetail'>
            <div className='leftSide'>
            {product.map((product) => {
                return (
                    <div className='productCard' key={product.id}>
                        <div onClick={() => selectProduct(product)}><img className='' scr={``} alt={product.title}/></div>
                    <div >{product.title}</div>
                    </div>
                );
            })}
        </div>
        <div className='rightSide'>
            {
                selected?.id !== undefined &&
                <ProductDetails product={selected} />
            }
        </div>
        </div>
    );
};*/



