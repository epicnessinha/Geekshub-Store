import axios from 'axios';

var root = 'https://api.escuelajs.co/api/v1/';

export const name = async () => {

    let config = {
        method: 'get',
        url:`${root}/ *name* `
    }

    return await axios(config);
}