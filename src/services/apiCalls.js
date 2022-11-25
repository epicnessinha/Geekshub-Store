import axios from 'axios';

var root = '';

export const name = async () => {

    let config = {
        method: 'get',
        url:`${root}/ *name* `
    }

    return await axios(config);
}