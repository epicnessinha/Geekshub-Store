import React from "react";
import { useProductContext } from "../../providers/ProductProvider";
import "./ProductDetails.css";

const ProductDetails = () => {
  const product = useProductContext();

  return (
    <div className="productDetailDesign">
      <br></br>
      <h1>Product Detail</h1>
      {product.id !== undefined && (
        <div className="productTitle">{product.title}</div>
      )}
    </div>
  );
};

export default ProductDetails;


/* <div><img className='productImage' src={product.image}} alt={product.image} with='375' height='560'/></div>
} */


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
