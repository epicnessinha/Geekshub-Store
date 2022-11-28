import React, {useState, useContext} from 'react';

const productContext = React.createContext();
const productChangeContext = React.createContext();


export const useProductContext = () => {
    return useContext(productContext);
};

export const useProductChangeContext = () => {
    return useContext(productChangeContext);
};


export const ProductProvider = (props) => {
    const [product, setProduct] = useState(null);

    const productChange = (selected) => {
        setProduct(selected)
    }
return(
    <productContext.Provider value={product}>
        <productChangeContext.Provider value={productChange}>
            {/* By wrapping props.children, we are ensuring all sons of this CharacterProvider will be able to use this context */}
            {props.children}
        </productChangeContext.Provider>
    </productContext.Provider>
)
}