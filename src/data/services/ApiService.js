import axios from 'axios';

const url = 'http://localhost:3002';

export const ApiService = axios.create({
    baseURL: url,
    headers: {
        'Contant-type': 'application/json',
    }
});