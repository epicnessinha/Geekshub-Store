import axios from 'axios';
import { json } from 'react-router-dom';

var root = 'https://api.escuelajs.co/api/v1/products';

export const bringProducts = async () => {

    let config = {
        method: 'get',
        url:`${root}/`
    
    }


    return await axios(config);
}

export const pushProducts = async (product) => {
    const jsonData = {
        "title": product.title,
        "price": product.price,
        "description": product.description,
        "categoryId": product.category.id,
        "images": product.images
    }
    let config = {
        method: 'post',
        url:`${root}/`,
        body: JSON.stringify(jsonData)
        
    }

    return await axios(config);
}

export const bringDetails = async (id) => {
    return await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`); 

    /*return await axios.get(`https://api.escuelajs.co/api/v1/products/1/${id}`);*/    
}


export const bringImages = async ([images]) => {
    return await axios.get(`https://api.escuelajs.co/api/v1/files/${images}`);
}
