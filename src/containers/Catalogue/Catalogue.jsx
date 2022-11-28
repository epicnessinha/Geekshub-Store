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

        const fetchPosts = async () => {
            setLoading(true);
            const res = bringProducts('products');
            setProducts(res);
            setLoading(false);
        }

        fetchPosts();
        console.log(products)
    }, [products]);

    return(
        <div className='catalogueDesign'>
            <h1>All of our products</h1>
            <Product products={products} loading={loading}/>

        </div>
        
    )
}

export default Catalogue;