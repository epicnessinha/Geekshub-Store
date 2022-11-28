import axios from 'axios';

var root = 'https://api.escuelajs.co/api/v1';

export const bringProducts = async (extension) => {

    let config = {
        method: 'get',
        url:`${root}/${extension}`
    }

    return await axios(config);
}

export const bringDetails = async (id) => {
    return await axios.get(`https://api.escuelajs.co/api/v1/products/1/${id}`);     
}

