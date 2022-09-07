import axios from 'axios';

export default axios.create({
    baseURL: `https://www.bizebirilazim.net/api/v1/`,
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'origin': '*',
        'Accept': "*"
    }
});