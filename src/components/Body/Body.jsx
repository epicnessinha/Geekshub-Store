import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import Catalogue from '../../containers/Catalogue/Catalogue';
import Home from '../../containers/Home/Home';
import AddProduct from '../../containers/AddProduct/AddProduct';
import SearchProduct from '../../containers/SearchProduct/SearchProduct';
import ProductDetails from '../../containers/ProductDetails/ProductDetails';
import { darkModeContext } from '../../providers/DarkModeProvider';

const Body = () => {

    const{darkMode} = useContext(darkModeContext);

    return (
        <div className={darkMode ? 'dark-theme' : 'light-theme'}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalogue' element={<Catalogue/>}/>
            <Route path='/search' element={<SearchProduct/>}/>
            <Route path='/add' element={<AddProduct/>}/>
            <Route path='/details' element={<ProductDetails/>}/>
        </Routes>
        </div>
    )
}

export default Body;