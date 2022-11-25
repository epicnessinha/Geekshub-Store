import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Catalogue from '../../containers/Catalogue/Catalogue';
import Home from '../../containers/Home/Home';
import AddProduct from '../../containers/AddProduct/AddProduct';
import SearchProduct from '../../containers/SearchProduct/SearchProduct';
import ProductDetails from '../../containers/ProductDetails/ProductDetails';

const Body = () => {

    return (
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalogue' element={<Catalogue/>}/>
            <Route path='/search' element={<SearchProduct/>}/>
            <Route path='/add' element={<AddProduct/>}/>
            <Route path='/details' element={<ProductDetails/>}/>
        </Routes>
        </>
    )
}

export default Body;