import React, {useState, useEffect} from 'react';
import './Catalogue.css';
import Product from '../../components/Product/Product';
import { bringProducts } from '../../services/apiCalls';



const Catalogue = () => {

    const[products, setProducts] = useState([]);

    const[loading, setLoading] = useState(false);
    const[currentPage, setCurrentPage] = useState(1);
    const[productsPerPage, setProductsPerPage] = useState(20);

    useEffect(() => {

       if(products.length === 0){
            bringProducts().then(
                res => {
                    setProducts(res.data);
                    console.log(res.data);
                }
            ).catch(error => console.log(error));
       }
        
    }, [products]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return(
        <div className='catalogueDesign'>
            <h1>All of our products</h1>
            <Product products={currentProducts} loading={loading}/>
            
            

        </div>

        
    )
}

export default Catalogue;