import axios from 'axios';

var root = 'https://api.escuelajs.co/api/v1/products';

export const bringProducts = async () => {

    let config = {
        method: 'get',
        url:`${root}/`
    
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
