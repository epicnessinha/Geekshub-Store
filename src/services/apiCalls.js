import axios from 'axios';

var root = 'https://api.escuelajs.co/api/v1';

export const bringProducts = async (extension) => {

    let config = {
        method: 'get',
        url:`${root}/${extension}`
    }

    return await axios(config);
}