import React, {useState, useEffect, useContext} from 'react';
import './Catalogue.css';
import Product from '../../components/Product/Product';
import { bringProducts } from '../../services/apiCalls';
import Pagination from '../../components/Pagination/Pagination';
import { darkModeContext } from '../../providers/DarkModeProvider';






const Catalogue = () => {

    const[products, setProducts] = useState([]);
    const[search, setSearch] = useState('');

    const[loading, setLoading] = useState(false);
    const[currentPage, setCurrentPage] = useState(1);
    const[productsPerPage, setProductsPerPage] = useState(20);

    useEffect(() => {

       if(products.length === 0){
            bringProducts().then (
                res => {
                    setProducts(res.data);
                    console.log(res.data);
                }
            ).catch(error => console.log(error));
       }
        
    }, [products]);

    useEffect(() => {
        if(search !== '') {
            const bring = setTimeout(() => {
              listProd(search);
            }, 500);

            return () => clearTimeout(bring);
        } else if(search === ''){
            setProducts([]);
        }
    }, [search]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    

    


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    

    const listProd = (props) => {
        const filteredData = products.filter((el) => {
            if(props.input === ""){
                return el;
            } else{
                return el.title.toLowerCase().includes(props)
            }
        })

        setProducts(filteredData);
    }

    const inputSearchHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearch(lowerCase);
    }

    return(
        <div className='catalogueDesign'>
            <div>
                <h1>All of our products</h1>
                <input type="text" placeholder='Search products' className='inputDesign' onChange={(e) => inputSearchHandler(e)}></input>
            </div>
            
            <Product products={currentProducts} loading={loading}/>
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}/>
            
            
            

        </div>

        
    )
}

export default Catalogue;